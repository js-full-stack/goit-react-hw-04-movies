// import propTypes from 'prop-types';
import './MovieDetailsPage.scss';
import { useState, useEffect } from 'react';
import {
  useParams,
  useHistory,
  useRouteMatch,
  Route,
  Link,
} from 'react-router-dom';
import moviesApi from '../../utils/moviesApi';

import DefaultPoster from '../../images/DefaultPoster.jpg';
import Cast from '../../Components/Cast';
import Reviews from '../../Components/Reviews';

const MovieDetailsPage = () => {
  const [movieDetails, setMovieDetails] = useState([]);
  const { id } = useParams();
  const history = useHistory();
  const { url, path } = useRouteMatch();
  const handleGoBack = () => {
    history.push({
      pathname: '/movies',
    });
  };

  useEffect(() => {
    moviesApi.handleClickLinkMovie(id).then(data => setMovieDetails(data));
  }, []);

  const {
    original_title,
    title,

    release_date,
    overview,
    poster_path,
    genres = [],
  } = movieDetails;
  return (
    <article>
      <h3>{original_title || title}</h3>
      {release_date && (
        <p className="MovieDetailsText">Release date: {release_date}</p>
      )}
      {overview && (
        <>
          <h3>Overview</h3>
          <p className="MovieDetailsText">{overview}</p>
        </>
      )}
      <button onClick={handleGoBack} type="button">
        Go back
      </button>
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
            : DefaultPoster
        }
        alt={title}
      />
      <>
        <h3>Genres:</h3>
        <ul>
          {genres.map(({ name, id }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
      </>
      {/* Вложенная навигация  */}
      <Link to={`${url}/reviews`}>Reviews</Link> <br />
      <Link to={`${url}/cast`}>Cast</Link>
      <Route
        path={`${url}/reviews`}
        render={props => {
          const reviewsData = movieDetails.reviews;
          console.log(reviewsData.results);
          console.log(reviewsData);
          return <Reviews {...props} data={reviewsData} />;
        }}
      />
      <Route
        path={`${url}/cast`}
        render={props => {
          const castData = movieDetails.credits;
          return <Cast {...props} data={castData} />;
        }}
      />
    </article>
  );
};
export default MovieDetailsPage;
