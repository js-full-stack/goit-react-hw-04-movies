import { useState } from 'react';
import sprite from '../../images/sprite.svg';
import { useLocation } from 'react-router-dom';
import './SearchForm.scss';
const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');
  const location = useLocation();

  const { pathname, state } = location;
  console.log(pathname);
  console.log(state);
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
          className="SearchInput"
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

//* Пример поиска по Submit с debounce

// import { useState, useEffect, useCallback } from 'react';
// import moviesApi from '../../utils/moviesApi';
// import _ from 'lodash';

// const SearchInput = () => {
//   const [query, setQuery] = useState('');
//   const [movieList, setMovieList] = useState([]);

//   const handleInputChange = e => setQuery(e.target.value);

//   useEffect(() => {
//     if (!query) return;
//   });

//   const movieSearch = useCallback(
//     _.debounce(
//       query =>
//         moviesApi
//           .handleMovieSearch(query)
//           .then(results => setMovieList(results)),
//       300,
//     ),
//     [],
//   );

//   useEffect(() => {
//     if (!query) return;

//     movieSearch(query);
//   }, [query, movieSearch]);
//   useEffect(() => {}, [query]);

//   return (
//     <>
//       <label className="SearchLabel">
//         <input
//           type="text"
//           value={query}
//           onChange={handleInputChange}
//           className="SearchInput"
//         />
//       </label>
//       {movieList && (
//         <ul>
//           {movieList.map(({ title, id }) => (
//             <li key={id}>{title}</li>
//           ))}
//         </ul>
//       )}
//     </>
//   );
// };

// export default SearchInput;
