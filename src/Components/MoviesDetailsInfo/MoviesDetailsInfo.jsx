import DefaultPoster from '../../images/DefaultPoster.jpg';
import './MoviesDetailsInfo.scss';

const MoviesDetailsInfo = ({ movieDetails, onClick }) => {
  const {
    original_title,
    title,
    release_date,
    overview,
    poster_path,
    genres = [],
  } = movieDetails;

  return (
    <>
      <h3 className="MovieDetailsTitle">{original_title || title}</h3>
      {release_date && (
        <p className="MovieDetailsText">Release date: {release_date}</p>
      )}
      {overview && (
        <>
          <h3 className="MovieDetailsSubTitle--overview">Overview</h3>
          <p className="MovieDetailsText">{overview}</p>
        </>
      )}
      <button className="buttonGoBack" type="button" onClick={onClick}>
        Go back
      </button>
      <img
        className="MovieDetailsImage"
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
            : DefaultPoster
        }
        alt={title}
      />
      {genres.length > 0 && (
        <h3 className="MovieDetailsSubTitle--genres">Genres:</h3>
      )}
      <div className="MoviesDetailsGenresContainer">
        <ul className="MovieDetailsList--genres">
          {genres.map(({ name, id }) => (
            <li className="MovieDetailsItem--genres" key={id}>
              {name}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MoviesDetailsInfo;
