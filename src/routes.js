import { lazy } from 'react';
// import HomePage from './Pages/HomePage';

const HomePage = lazy(() =>
  import('./Pages/HomePage' /* webpackChunkName: "HomePage" */),
);
const MoviesPage = lazy(() =>
  import('./Pages/MoviesPage' /* webpackChunkName: "MoviesPage" */),
);

const MovieDetailsPage = lazy(() =>
  import(
    './Pages/MovieDetailsPage' /* webpackChunkName: "MoviesDetailsPage" */
  ),
);

export const routes = [
  { path: '/', exact: true, label: 'Home Page', component: HomePage },
  { path: '/movies/:id', component: MovieDetailsPage },
  {
    path: '/movies',
    label: 'Movies Page',

    component: MoviesPage,
  },
];
