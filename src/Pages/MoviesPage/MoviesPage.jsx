// import propTypes from 'prop-types';
import { useState, useEffect } from 'react';

import './MoviesPage.scss';
import sprite from '../../images/sprite.svg';
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

export default MoviesPage;
