// import propTypes from 'prop-types';
import './ErrorPage.scss';
import { useHistory } from 'react-router-dom';

// import errorImg from './../../images/error.jpg';

const ErrorPage = () => {
  const history = useHistory();

  const handleGoHome = () => {
    history.push('/');
  };

  const handleGoSearch = () => {
    history.push('/movies');
  };

  return (
    <>
      <div className="Over">
        <div className="Error">404</div>
        <div className="Notfound">
          Страница не найдена <br />
          <button onClick={handleGoHome} className="LinkGoToHome">
            {' '}
            Перейти на главную страницу..
          </button>{' '}
          <br />
          <button onClick={handleGoSearch} className="LinkGoToSearch">
            Перейти на страницу поиска
          </button>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
