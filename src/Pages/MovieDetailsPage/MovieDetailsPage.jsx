// import propTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import moviesApi from '../../utils/moviesApi';
import './MovieDetailsPage.scss';
import DefaultPoster from '../../images/DefaultPoster.jpg';

const MovieDetailsPage = () => {
  const [movieDetails, setMovieDetails] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    moviesApi.handleClickLinkMovie(id).then(data => setMovieDetails([data]));
  }, []);

  return (
    <>
      {movieDetails.map(
        ({
          title,
          overview,
          genres,
          id,
          popularity,
          release_date,
          poster_path,
        }) => {
          return (
            <div key={id} className="MovieDetailsContainer">
              <h1>{title}</h1>
              <p className="MovieDetailsText">Release date: {release_date}</p>
              <h2>Overview</h2>
              <p className="MovieDetailsText">{overview}</p>

              <button type="button">Go back</button>
              <img
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                    : DefaultPoster
                }
                alt=""
              />
              <h2>Popularuty</h2>
              <p className="MovieDetailsText">{popularity.toFixed(1)}</p>
              <h2>Genres</h2>
              <ul>
                {genres.map(({ name, id }) => (
                  <li key={id}>{name}</li>
                ))}
              </ul>
            </div>
          );
        },
      )}
    </>
  );
};

export default MovieDetailsPage;
