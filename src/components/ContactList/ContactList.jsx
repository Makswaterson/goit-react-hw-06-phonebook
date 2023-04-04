import { ContactItem } from '../ContactItem/ContactItem';
import { StyledList, Wrapper } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getAllContacts, getAllFilters } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';
import { toast } from 'react-hot-toast';

export const ContactList = () => {
  const contacts = useSelector(getAllContacts);
  console.log(contacts);
  const filters = useSelector(getAllFilters);
  console.log(contacts);
  const dispatch = useDispatch();

  const deleteContacts = id => {
    dispatch(deleteContact(id));
    const deleteToast = contacts.find(contact => contact.id === id);
    console.log(deleteToast);
    toast.success(
      `${deleteToast.name} is deleted from the contacts list of phonebook!`
    );
  };
  const setVisibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filters.toLowerCase().trim())
  );

  // const getVisibleContacts = (contacts, filters) => {
  //   const normalizeFilters = filters.toString().toLowerCase().trim();
  //   return Array.isArray(contacts)
  //     ? contacts.filter(contact =>
  //         contact.name.toLowerCase().includes(normalizeFilters)
  //       )
  //     : [];
  // };
  // const setVisibleContacts = getVisibleContacts(filters, contacts);

  return (
    <Wrapper>
      <StyledList>
        {setVisibleContacts.map(({ id, name, number }) => {
          return (
            <ContactItem
              key={id}
              id={id}
              name={name}
              number={number}
              onDelete={deleteContacts}
            />
          );
        })}
      </StyledList>
    </Wrapper>
  );
};
