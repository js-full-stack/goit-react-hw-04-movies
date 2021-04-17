// import propTypes from 'prop-types';

const Cast = ({ data }) => {
  const castList = data.cast;
  // return <> {data.map(cast => <li></li>)}</>;
  return (
    <>
      {castList.map(({ name }) => (
        <li>{name}</li>
      ))}
    </>
  );
};

export default Cast;
