import { ContactItem } from '../ContactItem/ContactItem';
import { StyledList, Wrapper } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getAllContacts, getAllFilters } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';
import { toast } from 'react-hot-toast';

const getVisibleContacts = (filters, contacts) => {
  const normalizeFilters = filters.toLowerCase().trim();
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizeFilters)
  );
};

export const ContactList = () => {
  const contacts = useSelector(getAllContacts);
  const filters = useSelector(getAllFilters);
  const dispatch = useDispatch();
  const setVisibleContacts = getVisibleContacts(filters, contacts);

  const deleteContacts = id => {
    dispatch(deleteContact(id));
    const deleteToast = contacts.filter(contact => contact.id === id);
    toast.success(
      `${deleteToast} is deleted from the contacts list of phonebook!`
    );
  };

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
