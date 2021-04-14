import { routes } from '../routes';
import { Switch, Route } from 'react-router-dom';
import PageError from '../Pages/ErrorPage';

const Content = () => {
  return (
    <div className="content">
      <Switch>
        {routes.map(({ path, exact, component: Component }) => (
          <Route key={path} path={path} exact={exact} component={Component} />
        ))}
        <Route component={PageError} />
      </Switch>
    </div>
  );
};

export default Content;
