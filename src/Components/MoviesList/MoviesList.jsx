import { useLocation, Link } from 'react-router-dom';
import './MoviesList.scss';
import defaultPoster from '../../images/DefaultPoster.jpg';
const MoviesList = ({ filmsList, value }) => {
  const location = useLocation();
  const { pathname } = location;
  console.log(filmsList);

  return (
    <ul className="MovieList">
      {filmsList.map(({ title, id, poster_path }) => {
        return (
          <li className="MovieItems" key={id}>
            <Link
              className="MovieLinks"
              to={{
                pathname: `${pathname}/${id}`,
                state: {
                  from: location,
                  value,
                },
              }}
            >
              <img
                className="MoviesItem-image"
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                    : defaultPoster
                }
                alt={title}
              />
              <h5 className="MoviesTitle">{title}</h5>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MoviesList;
