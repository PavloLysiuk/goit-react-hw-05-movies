import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '296730eb54efbbc44cb6aeed23da7d0a';

axios.defaults.baseURL = BASE_URL;

export default async function fetchData(searchQuery, param = {}) {
  const config = {
    method: 'GET',
    baseURL: BASE_URL,
    params: {
      api_key: API_KEY,
      ...param,
    },
  };

  const response = await axios.get(searchQuery, config);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.data;
}
