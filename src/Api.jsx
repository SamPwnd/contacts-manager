import axios from "axios";

const instance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/users",
    timeout: 10000,
  });

  export const getContacts = async () => {
    try {
      let response = await instance.get('');
      return response.data;
    } catch (error) {
      console.error('Errore durante il recupero dei contatti:', error);
      alert('Impossibile recuperare i contatti. Si è verificato un errore.');
      throw new Error('Impossibile recuperare i contatti');
    }
  };
  
  export const postContacts = async (newContact) => {
    try {
      const response = await instance.post('', newContact);
      return response.data;
    } catch (error) {
      console.error('Errore durante l\'aggiunta del contatto:', error);
      alert('Impossibile aggiungere il contatto. Si è verificato un errore.');
      throw new Error('Impossibile aggiungere il contatto');
    }
  };
  
  export const patchContact = async (id, updatedContact) => {
    try {
      const response = await instance.patch(`${id}`, updatedContact);
      return response.data;
    } catch (error) {
      console.error('Errore durante l\'aggiornamento del contatto:', error);
      alert('Impossibile aggiornare il contatto. Si è verificato un errore.');
      throw new Error('Impossibile aggiornare il contatto');
    }
  };

  export const delContact = async (id) => {
    try {
      const response = await instance.delete(`${id}`);
      return response.data;
    } catch (error) {
      console.error('Errore durante l\'eliminazione del contatto:', error);
      alert('Impossibile eliminare il contatto. Si è verificato un errore.');
      throw new Error('Impossibile eliminare il contatto');
    }
  };

export default instance;