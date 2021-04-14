// import propTypes from 'prop-types';
import { useState, useEffect } from 'react';

import './MoviesPage.scss';
import sprite from '../../images/sprite.svg';
import moviesApi from '../../utils/moviesApi';
import SearchForm from '../../Components/SearchForm';

const MoviesPage = () => {
  // const [query, setQuery] = useState('');
  const [filmsList, setFilmsList] = useState([]);

  // const handleInputChange = e => setQuery(e.target.value);

  // useEffect(() => {}, []);

  const handleSubmit = searchQuery => {
    moviesApi
      .handleMovieSearch(searchQuery)
      .then(results => setFilmsList(results));
  };

  // const

  // useEffect(() => {
  //   moviesApi.handleMovieSearch(query).then(results => setFilmsList(results));
  // }, [query]);

  // const data = moviesApi
  //   .handleMovieSearch()
  //   .then(results => console.log(results));
  // console.log(data);

  // useEffect(() => {
  //   moviesApi.handleMovieSearch().then(results => setFilmsList(results));
  // }, [query]);
  // useEffect(() => {})
  return (
    <>
      <h2>Movies Page</h2>
      <SearchForm onSubmit={handleSubmit} />
      {/* <form onSubmit={handleSubmit} className="SearchForm">
        <label className="SearchLabel">
          <input
            type="text"
            value={query}
            onChange={handleInputChange}
            className="SearchInput"
            placeholder="Enter the title of the movie"
          />
          <button className="SearchButton" type="submit">
            Search
            <svg className="SearchIcon">
              <use href={`${sprite}#icon-search`}></use>
            </svg>
          </button>
        </label>
      </form> */}

      {filmsList && (
        <ul>
          {/* {filmsList.map(film => (
            <li>{film.title}</li>
          ))} */}
        </ul>
      )}
    </>
  );
};

export default MoviesPage;
