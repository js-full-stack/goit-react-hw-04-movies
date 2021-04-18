import propTypes from 'prop-types';
import './Reviews.scss';

const Reviews = ({ data }) => {
  return (
    <ul className="ReviewsList">
      {data.map(({ author, id, content }) => (
        <li className="ReviewsItem" key={id}>
          <h3 className="ReviewsAuthor">Author: {author}</h3>
          <p className="ReviewsContent">{content}</p>
        </li>
      ))}
    </ul>
  );
};

export default Reviews;
