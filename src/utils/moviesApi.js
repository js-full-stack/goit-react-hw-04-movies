import axios from 'axios';
const API_KEY = 'a97e0a0a9b37b258134862ba760da91a';
axios.defaults.baseURL = 'https://api.themoviedb.org';
const URL = `/3/trending/movie/day?api_key=${API_KEY}`;

// axios.defaults.headers.common['Authorization'] = `Bearer ${API_KEY}`;

const fetchPopularMovies = () => {
  return axios.get(URL).then(({ data }) => data.results);
};

const handleMovieSearch = query => {
  const SEARCH_URL = `/3/search/movie?api_key=${API_KEY}&query=${query}`;
  return axios.get(SEARCH_URL).then(({ data }) => data.results);
};

export default { fetchPopularMovies, handleMovieSearch };
