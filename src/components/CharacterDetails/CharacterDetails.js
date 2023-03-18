import Loader from 'components/Loader/Loader';
import { useState } from 'react';
import { NavLink, useLocation, useParams } from 'react-router-dom';
import { fetchCHaracter } from 'services/apiService';
import routes from 'utils/routes';

const CharacterDetails = () => {
  const [characterObj, setCharacterObj] = useState(null);
  const { state } = useLocation();
  const { characterId } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  const getCharacterDetails = async id => {
    setIsLoading(true);
    try {
      const resp = await fetchCHaracter([id]);
      // console.log('resp :', resp);
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

  const {
    image,
    name,
    // gender, id, species, type, origin
  } = characterObj;
  // console.log('origin :', origin);

  return (
    <div>
      <NavLink to={state?.prevLocationPath ?? routes.home}>
        <button> go back</button>
      </NavLink>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <p>{name}</p>
          <img src={image} alt="name" />
        </>
      )}
    </div>
  );
};

export default CharacterDetails;
