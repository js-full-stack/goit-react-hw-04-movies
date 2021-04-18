import { Suspense } from 'react';
import { routes } from '../routes';
import { Switch, Route } from 'react-router-dom';
import ErrorPage from '../Pages/ErrorPage';
import './Content.scss';
const Content = () => {
  return (
    <div className="Content">
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          {routes.map(({ path, exact, component: Component }) => (
            <Route key={path} path={path} exact={exact} component={Component} />
          ))}
          <Route component={ErrorPage} />
        </Switch>
      </Suspense>
    </div>
  );
};

export default Content;
