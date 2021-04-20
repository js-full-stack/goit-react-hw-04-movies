import axios from 'axios';
const API_KEY = 'a97e0a0a9b37b258134862ba760da91a';
axios.defaults.baseURL = 'https://api.themoviedb.org';
axios.defaults.params = {
  api_key: API_KEY,
};

const URL = `/3/trending/movie/day?`;

const fetchPopularMovies = async () => {
  const { data } = await axios.get(URL);
  return data.results;
};

const getMoviesByName = async query => {
  const SearchUrl = `/3/search/movie?query=${query}`;

  const { data } = await axios.get(SearchUrl);

  return data.results;
};

const getMovieById = async movieId => {
  const MovieUrl = `/3/movie/${movieId}?append_to_response=reviews,credits`;
  const { data } = await axios.get(MovieUrl);
  return data;
};

// eslint-disable-next-line
export default {
  fetchPopularMovies,
  getMoviesByName,
  getMovieById,
};
