import { ContactItem } from '../ContactItem/ContactItem';
import { StyledList, Wrapper } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getAllContacts, getAllFilters } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';
import { toast } from 'react-hot-toast';

export const ContactList = () => {
  const contacts = useSelector(getAllContacts);
  const filters = useSelector(getAllFilters);
  const setVisibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filters.toLowerCase().trim())
  );

  const dispatch = useDispatch();

  const deleteContacts = id => {
    dispatch(deleteContact(id));
    const deleteToast = contacts.find(contact => contact.id === id);
    console.log(deleteToast);
    toast.success(
      `${deleteToast.name} is deleted from the contacts list of phonebook!`
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
