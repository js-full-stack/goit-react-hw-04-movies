// import propTypes from 'prop-types';
import './Cast.scss';

import DefaultPhoto from '../../images/DefaultPhoto.png';
const Cast = ({ data }) => {
  const { cast } = data;
  console.log(cast);
  return (
    <>
      {cast.map(({ name, id, profile_path }) => (
        <>
          <div className="CastWrapper">
            <li className="CastItem" key={id}>
              {name}
            </li>

            {profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w300/${profile_path}`}
                alt={name}
              />
            ) : (
              DefaultPhoto
            )}
          </div>
        </>
      ))}
    </>
  );
};

export default Cast;
{
  /* <img
  src={
    poster_path
      ? `https://image.tmdb.org/t/p/w500/${poster_path}`
      : DefaultPoster
  }
  alt={title}
/>; */
}
