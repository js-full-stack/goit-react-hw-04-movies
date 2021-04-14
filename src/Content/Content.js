import { routes } from '../routes';
import { Switch, Route } from 'react-router-dom';
import PageError from '../Pages/ErrorPage';

const Content = () => {
  // const { pathname } = window.location;
  return (
    <div className="content">
      <Switch>
        {routes.map(({ path, exact, component: Component }) => (
          <Route path={path} exact={exact} component={Component} />
        ))}
        <Route component={PageError} />
      </Switch>
    </div>
  );
};

export default Content;
