import { User } from './User';
import PropTypes from 'prop-types';

export const UsersList = ({ users, deleteUser, openForm }) => {
  return (
    <>
      <ul>
        {users.map(({ id, name, email }) => (
          <li key={id}>
            <User id={id} name={name} email={email} deleteUser={deleteUser} />
          </li>
        ))}
      </ul>
      <button type="button" onClick={openForm}>
        Add User
      </button>
    </>
  );
};

UsersList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
