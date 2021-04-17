import propTypes from 'prop-types';

const Reviews = ({ data }) => {
  // data.map(result => console.log(result));
  const { results } = data;
  return (
    <>
      {results.map(({ author, id, content }) => (
        <div className="ReviewsContainer" key={id}>
          <h3>Author: {author}</h3>
          <p>{content}</p>
        </div>
      ))}
    </>
  );
};

export default Reviews;
