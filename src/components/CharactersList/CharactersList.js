import { NavLink, useLocation } from 'react-router-dom';
import routes from 'utils/routes';

const CharactersList = ({ users }) => {
  // console.log('users :', users);
  const { pathname, search } = useLocation();

  return (
    <>
      {users.length > 0 ? (
        <ul>
          {users.map(({ id, name }) => (
            <li key={id}>
              <NavLink
                to={`${routes.home}${id}`}
                state={{ prevLocationPath: pathname + search }}
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      ) : (
        <p>Not found characters</p>
      )}
    </>
  );
};

export default CharactersList;
