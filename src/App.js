// import propTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import Content from './Content/Content';
//* pages
import Navigation from './Components/Navigation';
import HomePage from './Pages/HomePage';
import MoviesPage from './Pages/MoviesPage';
import ErrorPage from './Pages/ErrorPage/';

function App() {
  return (
    <>
      <Navigation />
      <Content />
    </>
  );
}

export default App;
