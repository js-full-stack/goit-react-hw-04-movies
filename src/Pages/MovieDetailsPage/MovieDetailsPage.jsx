// import propTypes from 'prop-types';
import './MovieDetailsPage.scss';
import { useState, useEffect } from 'react';
import {
  useParams,
  useHistory,
  useRouteMatch,
  Route,
  NavLink,
  useLocation,
  withRouter,
} from 'react-router-dom';
import moviesApi from '../../utils/moviesApi';

import Cast from '../../Components/Cast';
import MoviesDetailsInfo from '../../Components/MoviesDetailsInfo';
import Reviews from '../../Components/Reviews';

const MovieDetailsPage = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const { error, stateError } = useState();
  const { id } = useParams();
  const { url } = useRouteMatch();
  const { push } = useHistory();

  const location = useLocation();
  const handleGoBack = () => {
    push(location?.state?.from || push('/'));
  };

  useEffect(() => {
    moviesApi.handleClickLinkMovie(id).then(data => setMovieDetails(data));
  }, []);

  return (
    <article className="MovieDetailsContainer">
      <MoviesDetailsInfo movieDetails={movieDetails} onClick={handleGoBack} />

      {/* Вложенная навигация  */}
      <div className="LinksContainer">
        <NavLink
          className="AdditionalLinkInfo"
          activeClassName="AdditionalLinkInfo--active"
          to={{
            pathname: `${url}/reviews`,
            state: {
              from: location?.state?.from,
            },
          }}
        >
          Reviews
        </NavLink>
        <br />
        <br />

        <NavLink
          className="AdditionalLinkInfo"
          activeClassName="AdditionalLinkInfo--active"
          to={{
            pathname: `${url}/cast`,
            state: {
              from: location?.state?.from,
            },
          }}
        >
          Cast
        </NavLink>
      </div>

      <Route
        path={`${url}/reviews`}
        render={props => {
          return (
            movieDetails?.reviews?.results &&
            (<Reviews {...props} data={movieDetails.reviews.results} /> || (
              <p>We don't have reviews for this movie</p>
            ))
          );
        }}
      />
      <Route
        path={`${url}/cast`}
        render={props => {
          return (
            movieDetails?.credits?.cast?.length > 0 && (
              <Cast {...props} cast={movieDetails.credits.cast} />
            )
          );
        }}
      />
    </article>
  );
};

export default withRouter(MovieDetailsPage);
