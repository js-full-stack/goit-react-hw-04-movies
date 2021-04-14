// import propTypes from 'prop-types';

import sprite from '../../images/sprite.svg';
import './MoviesPage.scss';
const MoviesPage = () => {
  return (
    <>
      <h2>Movies Page</h2>
      <form className="SearchForm">
        <label className="SearchLabel">
          <input
            type="text"
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
      </form>
    </>
  );
};

export default MoviesPage;
