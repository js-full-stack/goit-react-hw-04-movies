import { Suspense } from 'react';
import { routes } from '../routes';
import { Switch, Route, Redirect } from 'react-router-dom';
import PageError from '../Pages/ErrorPage';

const Content = () => {
  return (
    <div className="content">
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          {routes.map(({ path, exact, component: Component }) => (
            <Route key={path} path={path} exact={exact} component={Component} />
          ))}
          <Route component={PageError} />
          {/* <Redirect to="/" /> */}
        </Switch>
      </Suspense>
    </div>
  );
};

export default Content;
