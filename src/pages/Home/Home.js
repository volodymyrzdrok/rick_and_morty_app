import BasicPagination from 'components/Pagination/Pagination';
import CharactersList from 'components/CharactersList/CharactersList';
import FilterInput from 'components/FilterInput/FilterInput';
import Loader from 'components/Loader/Loader';
import { useLocalStorage } from 'hooks/useLocalStorage';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  fetchCHaracter,
  fetchCHaracterByName,
  fetchTotalCountUsers,
} from 'services/apiService';
import { getUsersIdArr, getUsersIdArrByName } from 'utils/getUsersIdArr';
import Logo from 'components/Logo/Logo';

const Home = () => {
  const [arrWithIds, setArrWithIds] = useState([]);
  const [page, setPage] = useLocalStorage('page_r&m', 1);
  const [users, setUsers] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const [filter, setFilter] = useState(query ?? '');
  const [isLoading, setIsLoading] = useState(false);

  const onChangePage = (e, p) => {
    setPage(p);
  };

  const onChangeFilter = e => {
    const value = e.target.value;
    if (filter) {
      setSearchParams({ query: value });
      setPage(1);
    }
    setFilter(value);
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
    setIsLoading(true);
    try {
      const { data } = await fetchCHaracterByName(name);
      setUsers(data.results.length ? data.results : [data.results]);
      setArrWithIds(getUsersIdArrByName(data.results));
    } catch (err) {
      setUsers([]);
      setArrWithIds([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!filter) {
      getArrWithId();
    } else {
      getCharactersByName(filter);
    }
  }, [filter]);

  const getAllCharacters = async arrUsersId => {
    setIsLoading(true);

    try {
      const { data } = await fetchCHaracter(arrUsersId);
      setUsers(data.length ? data : [data]);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (arrWithIds.length > 0) {
      getAllCharacters(arrWithIds[page - 1]);
    }
  }, [arrWithIds, page]);

  return (
    <>
      <Logo />
      <FilterInput onChangeFilter={onChangeFilter} filter={filter} />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <CharactersList users={users} />
          {arrWithIds.length > 1 && (
            <BasicPagination
              count={arrWithIds.length}
              page={page}
              onChange={onChangePage}
            />
          )}
        </>
      )}
    </>
  );
};

export default Home;
