import axios from 'axios';
const MAIN_URL = `https://rickandmortyapi.com/api`;

axios.defaults.baseURL = MAIN_URL;

export async function fetchTotalCountUsers() {
  try {
    const resp = await axios.get(`/character`);

    return resp.data.info.count;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchAllCHaracters(arrUsers, page = 1) {
  try {
    const resp = await axios.get(`/character/${arrUsers}?page=${page}
`);

    return resp;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchCHaracterByName(name) {
  try {
    const resp = await axios.get(`/character/?name=${name}
`);
    return resp;
  } catch (error) {
    console.error(error);
  }
}
