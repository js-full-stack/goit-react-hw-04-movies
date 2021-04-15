import { lazy } from 'react';
// import HomePage from './Pages/HomePage';
// import MoviesPage from './Pages/MoviesPage';

const HomePage = lazy(
  () => import('./Pages/HomePage') /* webpackChunkName: "HomePage" */,
);
const MoviesPage = lazy(
  () => import('./Pages/MoviesPage') /* webpackChunkName: "MoviesPage" */,
);
// *Lazy Load

export const routes = [
  { path: '/', exact: true, label: 'HomePage', component: HomePage },
  { path: '/movies', label: 'MoviesPage', component: MoviesPage },
];
