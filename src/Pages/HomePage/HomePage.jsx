// import propTypes from 'prop-types';
import { useState, useEffect } from 'react';
import moviesApi from '../../utils/moviesApi';
import { Link, useLocation } from 'react-router-dom';
import './HomePage.scss';

const HomePage = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const { pathname } = useLocation();

  useEffect(() => {
    moviesApi.fetchPopularMovies().then(movies => {
      setPopularMovies(movies);
    });
  }, []);

  return (
    <>
      <h2>Popular Movies</h2>
      <ul>
        {popularMovies.map(({ title, id }) => (
          <li key={id} className="HomePageMovieItem">
            <Link to={`${pathname}movies/${id}`} className="HomePageMoveiLink">
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default HomePage;
