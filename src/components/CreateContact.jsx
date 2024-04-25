import { useState } from "react";
import { Button, Form } from "react-bootstrap";

const CreateContact = ({addContact}) => {
  const [contact, setContact] = useState({ name: '', phone: '', email:''})

  const handleChange = (e) => {
      if (!e.target) return
      const {name, value} = e.target
      setContact(prevContact => ({
          ...prevContact,
          [name]: value
      }))
  }

  const handleSubmit = (e) => {
      e.preventDefault();
      addContact(contact);
  };

  return (
    <Form onSubmit={handleSubmit} className="add-form">
      <h1>Crea un nuovo contatto</h1>
        <Form.Control type="text" className="form-control" name="name" value={contact.name} placeholder="Nome"
          onChange={handleChange} required
        />
        <Form.Control type="text" className="form-control" name="phone" value={contact.phone} placeholder="Telefono"
          onChange={handleChange} required
        />
        <Form.Control type="email" className="form-control" name="email" value={contact.email} placeholder="Email"
          onChange={handleChange} required
        />
        <Button variant="dark" type="submit">Aggiungi contatto</Button>
    </Form>
  )
}

export default CreateContact;