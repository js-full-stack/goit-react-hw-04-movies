import PropTypes from 'prop-types';
import { useState } from 'react';

import './MoviesPage.scss';
import moviesApi from '../../utils/moviesApi';
import SearchForm from '../../Components/SearchForm';

const MoviesPage = () => {
  const [filmsList, setFilmsList] = useState([]);

  const handleSubmit = searchQuery => {
    moviesApi
      .handleMovieSearch(searchQuery)
      .then(results => setFilmsList(results));
  };

  return (
    <>
      <h2>Movies Page</h2>
      <SearchForm onSubmit={handleSubmit} />
      {filmsList && (
        <ul>
          {filmsList.map(film => (
            <li key={film.id}>{film.title}</li>
          ))}
        </ul>
      )}
    </>
  );
};

MoviesPage.propTypes = {
  handleSubmit: PropTypes.func,
  moviesApi: PropTypes.shape({
    handleMovieSearch: PropTypes.func,
  }),
};

export default MoviesPage;
