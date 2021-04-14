import { useState } from 'react';
import sprite from '../../images/sprite.svg';

const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = e => setQuery(e.target.value);
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(query);
    setQuery('');
  };

  return (
    <form onSubmit={handleSubmit} className="SearchForm">
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
    </form>
  );
};

export default SearchForm;
