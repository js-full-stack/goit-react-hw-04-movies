import { Suspense } from 'react';
import { routes } from '../routes';
import { Switch, Route } from 'react-router-dom';
import ErrorPage from '../Pages/ErrorPage';

const Content = () => {
  return (
    <div className="content">
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          {routes.map(({ path, exact, component: Component }) => (
            <Route key={path} path={path} exact={exact} component={Component} />
          ))}
          <Route component={ErrorPage} />
          {/* <Redirect to="/" /> */}
        </Switch>
      </Suspense>
    </div>
  );
};

export default Content;
