// import propTypes from 'prop-types';
import './Cast.scss';

import DefaultPhoto from '../../images/DefaultPhoto.png';
const Cast = ({ cast }) => {
  console.log(cast);
  return (
    <div className="CastWrapper">
      <>
        {cast.map(({ name, id, profile_path }) => {
          return (
            <li key={id} className="CastItem">
              {profile_path ? (
                <img
                  className="ImageCastPhoto"
                  src={`https://image.tmdb.org/t/p/w300/${profile_path}`}
                  alt={name}
                />
              ) : (
                <img
                  className="ImageDefaultPhoto"
                  src={DefaultPhoto}
                  alt=""
                  width="300"
                />
              )}
              {name}
            </li>
          );
        })}
      </>
    </div>
  );
};

export default Cast;
