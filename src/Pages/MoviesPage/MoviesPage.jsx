import { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
// import { Switch } from 'react-router-dom';
import queryString from 'query-string';
import './MoviesPage.scss';
import moviesApi from '../../utils/moviesApi';
import SearchForm from '../../Components/SearchForm';
import MoviesList from '../../Components/MoviesList';

const MoviesPage = () => {
  const location = useLocation();
  const queryParams = queryString.parse(location.search);

  const { push } = useHistory();

  const [value, setValue] = useState(queryParams?.query || '');
  const [filmsList, setFilmsList] = useState([]);

  const getFilms = () => {
    moviesApi.getMoviesByName(value).then(results => setFilmsList(results));
  };

  const handleSubmit = query => {
    setValue(query);
  };

  useEffect(() => {
    if (value) {
      push({ ...location, search: `?query=${value}` });

      getFilms();
    }
  }, [value]);

  return (
    <>
      <SearchForm onSubmit={handleSubmit} />
      <MoviesList filmsList={filmsList} value={value} />
    </>
  );
};

export default MoviesPage;
