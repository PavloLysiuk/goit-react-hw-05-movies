import axios from 'axios';
// const API_KEY = '296730eb54efbbc44cb6aeed23da7d0a';
const API_KEY =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOTY3MzBlYjU0ZWZiYmM0NGNiNmFlZWQyM2RhN2QwYSIsInN1YiI6IjY1MGRiNzBiMmM2YjdiMDBjNGZlYTNkZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gNpNa83FVHbbmx-R2dssn4Etk7KvHy7NTgJc7WihJm8';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const headers = {
  accept: 'application/json',
  Authorization: `Bearer ${API_KEY}`,
};

export const fetchTrending = async () => {
  const url = '/trending/movie/day?language=en-US';
  const resp = await axios.get(url, { headers });
  return resp.data;
};

export const fetchMovie = async movieName => {
  const url = `/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`;
  const resp = await axios.get(url, { headers });
  return resp.data;
};


export const fetchDetails = async id => {
  const url = `/movie/${id}?language=en-US`;
  const resp = await axios.get(url, { headers });
  return resp.data;
};

export const fetchCast = async id => {
  const url = `/movie/${id}/credits?language=en-US`;
  const resp = await axios.get(url, { headers });
  return resp.data;
};

export const fetchReviews = async id => {
  const url = `/movie/${id}/reviews?language=en-US&page=1`;
  const resp = await axios.get(url, { headers });
  return resp.data;
};
