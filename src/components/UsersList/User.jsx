export const User = ({ id, name, email, deleteUser }) => {
  return (
    <>
      <p>
        {' '}
        Name: <span>{name}</span>
      </p>
      <p>
        Email: <span>{email}</span>
      </p>
      <button type="button" onClick={() => deleteUser(id)}>
        Delete
      </button>
    </>
  );
};
