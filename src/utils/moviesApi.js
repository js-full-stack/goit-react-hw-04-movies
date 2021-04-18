import axios from 'axios';
const API_KEY = 'a97e0a0a9b37b258134862ba760da91a';
axios.defaults.baseURL = 'https://api.themoviedb.org';
const URL = `/3/trending/movie/day?api_key=${API_KEY}`;

const fetchPopularMovies = () => {
  return axios.get(URL).then(({ data }) => data.results);
};

const handleMovieSearch = query => {
  const SearchUrl = `/3/search/movie?api_key=${API_KEY}&query=${query}`;
  return axios.get(SearchUrl).then(({ data }) => data.results);
};

const handleClickLinkMovie = movieId => {
  const MovieUrl = `/3/movie/${movieId}?api_key=${API_KEY}&append_to_response=reviews,credits`;
  return axios.get(MovieUrl).then(({ data }) => data);
};

// eslint-disable-next-line
export default { fetchPopularMovies, handleMovieSearch, handleClickLinkMovie };
