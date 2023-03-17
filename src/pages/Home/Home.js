import { Pagination } from '@mui/material';
import CharactersList from 'components/CharactersList/CharactersList';
import FilterInput from 'components/FilterInput/FilterInput';
import { useLocalStorage } from 'hooks/useLocalStorage';
import { useEffect, useState } from 'react';
import {
  fetchAllCHaracters,
  fetchCHaracterByName,
  fetchTotalCountUsers,
} from 'services/apiService';
import { getUsersIdArr } from 'utils/getUsersIdArr';
import logo from '../../assets/images/logo.webp';

const Home = () => {
  const [arrWithIds, setArrWithIds] = useState([]);
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useLocalStorage('filter_r&m', '');

  const onChangePage = (e, p) => {
    setPage(p);
  };

  const getArrWithId = async () => {
    try {
      const countUsers = await fetchTotalCountUsers();
      setArrWithIds(getUsersIdArr(countUsers));
    } catch (error) {
      console.log(error);
    }
  };
  const getCharactersByName = async name => {
    try {
      const { data } = await fetchCHaracterByName(name);
      setArrWithIds(getUsersIdArr(data.info.count));

      setUsers(data.results.length ? data.results : [data.results]);

      //   console.log('resp :', { data });
    } catch (err) {
      console.log('err.messages :', err.message);
      if (err.message.includes(`Cannot destructure property 'data'`)) {
        setUsers([]);
        setArrWithIds([]);
      }
      //   console.log(error.message);
    }
  };

  useEffect(() => {
    setPage(1);
    if (!filter) {
      getArrWithId();
    } else {
      getCharactersByName(filter);
    }
  }, [filter]);

  const getAllCharacters = async (arrUsersId, page) => {
    try {
      const { data } = await fetchAllCHaracters(arrUsersId, page);

      setUsers(data.length ? data : [data]);

      //   console.log('data :');
    } catch (error) {
      console.dir(error);
    }
  };

  useEffect(() => {
    if (arrWithIds.length > 0) {
      getAllCharacters(arrWithIds[page - 1], page);
    }
  }, [arrWithIds, page]);

  return (
    <>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <FilterInput onChangeFilter={setFilter} filter={filter} />
      <CharactersList users={users} />
      {arrWithIds.length > 1 && (
        <Pagination
          count={arrWithIds.length}
          page={page}
          onChange={onChangePage}
        />
      )}
    </>
  );
};

export default Home;
