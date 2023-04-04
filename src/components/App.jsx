import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { AppStyled } from './App.styled';
import { useSelector } from 'react-redux';
import { getAllContacts } from '../redux/selectors';
import { Toaster } from 'react-hot-toast';

// const getInitialContacts = () => {
//   const savedContacts = localStorage.getItem('contacts');
//   if (savedContacts !== null) {
//     const parsedContacts = JSON.parse(savedContacts);
//     return parsedContacts;
//   }
//   return [];
// };

export const App = () => {
  const contacts = useSelector(getAllContacts);

  // const [contacts, setContacts] = useState(getInitialContacts);
  // const [filter, setFilter] = useState('');

  //   useEffect(() => {
  //     localStorage.setItem('contacts', JSON.stringify(contacts));
  //   }, [contacts]);

  // const onDeleteContacts = contactId => {
  //   setContacts(prevState =>
  //     prevState.filter(contact => contact.id !== contactId)
  //   );
  // };
  // const onHandleFilter = evt => setFilter(evt.target.value);

  // const getVisibleContacts = () => {

  //   const normalizedFilter = filter.toLowerCase().trim();
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter)
  //   );
  // };

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
