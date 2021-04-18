// import propTypes from 'prop-types';
import { useState, useEffect } from 'react';
import moviesApi from '../../utils/moviesApi';
import { Link, useLocation } from 'react-router-dom';
import './HomePage.scss';

const HomePage = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    moviesApi.fetchPopularMovies().then(movies => {
      setPopularMovies(movies);
    });
  }, []);
  return (
    <>
      <ul className="PopularMoviesList">
        {popularMovies.map(({ title, id, poster_path }) => (
          <li key={id} className="PopularMoviesItem">
            <Link
              to={{
                pathname: `${pathname}movies/${id}`,
                state: {
                  from: location,
                },
              }}
              className="PopularMoviesLink"
            >
              <img
                className="PopularMoviesItem-image"
                src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                alt=""
              />
              <h5 className="PopularMoviesTitle">{title}</h5>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default HomePage;
