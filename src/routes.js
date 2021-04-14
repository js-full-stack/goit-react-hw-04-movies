import HomePage from './Pages/HomePage';
import MoviesPage from './Pages/MoviesPage';
// import ErrorPage from './Pages/ErrorPage/ErrorPage';

export const routes = [
  { path: '/', exact: true, label: 'HomePage', component: HomePage },
  { path: '/movies', label: 'MoviesPage', component: MoviesPage },
];
