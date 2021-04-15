// import propTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import moviesApi from '../../utils/moviesApi';
//
//

import axios from 'axios';
const API_KEY = 'a97e0a0a9b37b258134862ba760da91a';
axios.defaults.baseURL = 'https://api.themoviedb.org';

//

const MovieDetailsPage = () => {
  const [movieDetails, setMovieDetails] = useState([]);
  const { id } = useParams();
  console.log('id:', id);

  useEffect(() => {
    moviesApi.handleClickLinkMovie(id).then(data => setMovieDetails([data]));
  }, []);

  return (
    <>
      {movieDetails.map(({ title, overview, release_date }) => (
        <div className="MovieDetailsContainer">
          <h1>{title}</h1>
          <p>{overview}</p>
        </div>
      ))}
    </>
  );
};

export default MovieDetailsPage;
// overview '', original__title '', release_date '', genres [],
