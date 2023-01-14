import { Text } from '../ContactList.styled';
import PropTypes from 'prop-types';

export function ContactListItem({ id, name, number, deleteContact }) {
  return (
    <li>
      <Text>
        {name}
        <span>{number}</span>
        <button type="button" onClick={() => deleteContact(id)}>
          Delete Contact
        </button>
      </Text>
    </li>
  );
}

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func,
};
