import PropTypes from 'prop-types';
import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Switch } from 'react-router-dom';

import './MoviesPage.scss';
import moviesApi from '../../utils/moviesApi';
import SearchForm from '../../Components/SearchForm';

const MoviesPage = () => {
  const [filmsList, setFilmsList] = useState([]);
  const { pathname, search } = useLocation();
  // console.log('pathname:', pathname);
  // console.log('search:', search);

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
          {filmsList.map(({ title, id }) => (
            <li className="MovieItem" key={id}>
              <Link className="MoviesLink" to={`${pathname}/${id}`}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      )}
      <Switch></Switch>
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
