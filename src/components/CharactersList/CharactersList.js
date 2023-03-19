import { NavLink, useLocation } from 'react-router-dom';
import routes from 'utils/routes';
import { sortByName } from 'utils/sortByName';
import s from './CharactersList.module.scss';

const CharactersList = ({ users }) => {
  const { pathname, search } = useLocation();

  return (
    <>
      {users.length > 0 ? (
        <ul className={s.list}>
          {sortByName(users).map(({ id, image, gender, name }) => (
            <li key={id} className={s.item}>
              <NavLink
                to={`${routes.home}${id}`}
                state={{ prevLocationPath: pathname + search }}
              >
                <div className={s.imgContainer}>
                  <img className={s.img} src={image} alt={name} />
                </div>
                <div className={s.descContainer}>
                  <h4 className={s.title}> {name.slice(0, 16)}</h4>
                  <p className={s.desc}>{gender}</p>
                </div>
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
