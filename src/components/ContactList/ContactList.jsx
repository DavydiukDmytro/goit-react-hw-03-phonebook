import PropTypes from 'prop-types';
import { Contacts, Btn, Item } from './ContactList.styled';

export const ContactList = ({ onDelete, contactArr }) => {
  return (
    <>
      <ul>
        {contactArr.map(name => (
          <Item key={name.id}>
            <Contacts>
              {name.name}: {name.number}
            </Contacts>
            <Btn
              type="button"
              id={name.id}
              onClick={e => {
                onDelete(e.target.id);
              }}
            >
              Delete
            </Btn>
          </Item>
        ))}
      </ul>
    </>
  );
};

ContactList.propTypes = {
  contactArr: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};
