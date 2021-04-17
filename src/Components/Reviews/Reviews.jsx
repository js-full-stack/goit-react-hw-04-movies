import propTypes from 'prop-types';

const Reviews = ({ data }) => {
  // data.map(result => console.log(result));
  const { results } = data;
  console.log();
  return (
    <>
      {results.length > 0 ? (
        results.map(({ author, id, content }) => (
          <div className="ReviewsContainer" key={id}>
            <h3>Author: {author}</h3>
            <p>{content}</p>
          </div>
        ))
      ) : (
        <p>We don't have reviews for this movie</p>
      )}
    </>
  );
};

export default Reviews;
