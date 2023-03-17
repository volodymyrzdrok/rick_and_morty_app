const CharactersList = ({ users }) => {
  // console.log('users :', users);
  return (
    <ul>
      {users.map(({ id, name }) => (
        <li key={id}>
          <p>{name}</p>
        </li>
      ))}
    </ul>
  );
};

export default CharactersList;
