import axios from 'axios';
const API_KEY = 'a97e0a0a9b37b258134862ba760da91a';
axios.defaults.baseURL = 'https://api.themoviedb.org';
const URL = `/3/trending/movie/day?api_key=${API_KEY}`;

const fetchPopularMovies = async () => {
  const { data } = await axios.get(URL);
  return data.results;
};

const handleMovieSearch = async query => {
  const SearchUrl = `/3/search/movie?api_key=${API_KEY}&query=${query}`;

  const { data } = await axios.get(SearchUrl);

  return data.results;
};

const handleClickLinkMovie = async movieId => {
  const MovieUrl = `/3/movie/${movieId}?api_key=${API_KEY}&append_to_response=reviews,credits`;
  const { data } = await axios.get(MovieUrl);
  return data;
};

// eslint-disable-next-line
export default {
  fetchPopularMovies,
  handleMovieSearch,
  handleClickLinkMovie,
};
