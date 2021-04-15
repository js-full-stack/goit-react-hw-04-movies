// import propTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import moviesApi from '../../utils/moviesApi';
import { v4 as uuidv4 } from 'uuid';

//

const MovieDetailsPage = () => {
  const [movieDetails, setMovieDetails] = useState([]);
  const { id } = useParams();
  console.log('id:', id);

  useEffect(() => {
    moviesApi.handleClickLinkMovie(id).then(data => setMovieDetails([data]));
  }, []);

  console.log(movieDetails);

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
          console.log(poster_path);
          return (
            <div key={id} className="MovieDetailsContainer">
              <h1>{title}</h1>
              <p>Release date: {release_date}</p>
              <h2>Overview</h2>
              <p>{overview}</p>
              <img
                src={`https://image.tmdb.org/t/p/original/${poster_path}`}
                alt=""
              />
              <h2>Popularuty</h2>
              <p>{popularity.toFixed(1)}</p>
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
//image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg

export default MovieDetailsPage;
// overview '', original__title '', release_date '', genres [],
