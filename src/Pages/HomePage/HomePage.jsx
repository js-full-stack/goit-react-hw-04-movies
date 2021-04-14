// import propTypes from 'prop-types';
import { useState, useEffect } from 'react';
import moviesApi from '../../Services/moviesApi';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    moviesApi.fetchPopularMovies().then(movies => {
      setPopularMovies(movies);
    });
  }, []);

  return (
    <>
      <h2>Popular Movies</h2>
      <ul>
        {popularMovies.map(({ title }) => (
          <li>
            <Link>{title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default HomePage;
