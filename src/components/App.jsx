import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { AppStyled } from './App.styled';
import { useSelector } from 'react-redux';
import { getAllContacts } from '../redux/selectors';
import { Toaster } from 'react-hot-toast';

export const App = () => {
  const contacts = useSelector(getAllContacts);

  return (
    <AppStyled>
      <Toaster />
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {contacts.length > 0 && <ContactList />}
    </AppStyled>
  );
};
