import { useState, useEffect } from 'react'
import ContactsList from './components/ContactsList';
import EditContact from './components/EditContact';
import Login from './components/Login';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { delContact, getContacts } from './Api';
import { PrivateRoute } from './components/PrivateRoute';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss'


function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    getContacts().then((res) => {
      setContacts(res)
    }).catch((error) => {
      console.error(error);
    });
    
  }, []);

  const deleteContact = (id) => {
    delContact(id).catch((error) => {
      console.error(error);
    })
    setContacts(
      contacts.filter((contact) => {
         return contact.id !== id;
      })
   );
  }

  const updateContacts = (responseContact) => {
    setContacts((prevContacts) => {
      const existingContact = contacts.find(contact => contact.id === responseContact.id);
      if (!existingContact) {
        return [responseContact, ...prevContacts];
      }
      else {
        return prevContacts.map(contact => {
          if (contact.id === responseContact.id) {
            return responseContact; 
          }
          return contact;
        });
      }
    }) 
  }

  return (
    <>
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path='' element={<ContactsList contacts={contacts} deleteContact={deleteContact} updateContacts={updateContacts} />} />
            <Route path="/edit-contact/:id" element={<EditContact updateContacts={updateContacts} />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </BrowserRouter>
    </>
  )
}

export default App
