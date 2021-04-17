// import propTypes from 'prop-types';
import { useState, useEffect } from 'react';
import moviesApi from '../../utils/moviesApi';
import { Link, useLocation } from 'react-router-dom';
import './HomePage.scss';

const HomePage = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const location = useLocation();
  const { pathname } = location;
  console.log(pathname);
  console.log(location);
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
            <Link
              to={{
                pathname: `${pathname}movies/${id}`,
                state: {
                  from: location,
                },
              }}
              className="HomePageMoveiLink"
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default HomePage;
