// import propTypes from 'prop-types';
import './ErrorPage.scss';
// import errorImg from './../../images/error.jpg';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <>
      <div className="Over">
        <div className="Error">404</div>
        <div className="Notfound">
          Страница не найдена <br />
          <Link className="LinkGoToHome" to="/">
            {' '}
            Перейти на главную страницу..
          </Link>{' '}
          <br />
          <Link className="LinkGoToSearch" to="/movies">
            Перейти на страницу поиска
          </Link>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
