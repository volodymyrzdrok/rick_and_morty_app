import Loader from 'components/Loader/Loader';
import { useState } from 'react';
import { NavLink, useLocation, useParams } from 'react-router-dom';
import { fetchCHaracter } from 'services/apiService';
import routes from 'utils/routes';
import s from './CharacterDetails.module.scss';

const CharacterDetails = () => {
  const [characterObj, setCharacterObj] = useState(null);
  const { state } = useLocation();
  const { characterId } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  const getCharacterDetails = async id => {
    setIsLoading(true);
    try {
      const resp = await fetchCHaracter([id]);

      setCharacterObj(resp.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useState(() => {
    getCharacterDetails(characterId);
  }, []);

  if (!characterObj) return null;

  const { image, name, gender, species, type, origin, status } = characterObj;

  return (
    <div>
      <NavLink
        className={s.goBackBtn}
        to={state?.prevLocationPath ?? routes.home}
      >
        <b>&#x2190;</b> go back
      </NavLink>

      {isLoading ? (
        <Loader />
      ) : (
        <div className={s.containerInfo}>
          <img className={s.img} src={image} alt={name} />
          <h2 className={s.title}>{name}</h2>

          <div className={s.containerDescription}>
            <p className={s.subTitle}>Informations</p>
            <ul className={s.list}>
              <li className={s.item}>
                <p className={s.secr}>Gender</p>
                <p className={s.value}>{gender}</p>
              </li>
              <li className={s.item}>
                <p className={s.secr}>Status</p>
                <p className={s.value}>{status}</p>
              </li>
              <li className={s.item}>
                <p className={s.secr}>Specie</p>
                <p className={s.value}>{species}</p>
              </li>
              <li className={s.item}>
                <p className={s.secr}>Origin</p>
                <p className={s.value}>{origin.name}</p>
              </li>
              <li className={s.item}>
                <p className={s.secr}>Type</p>
                <p className={s.value}>{type ? type : 'Unknown'}</p>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default CharacterDetails;
