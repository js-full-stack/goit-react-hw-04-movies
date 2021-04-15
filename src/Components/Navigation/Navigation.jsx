import { NavLink } from 'react-router-dom';
import { routes } from '../../routes';
import './Navigation.scss';

const Navigation = () => {
  return (
    <nav>
      <ul className="NavList">
        {routes.map(({ path, label, exact }) => {
          return (
            <li key={path} className="NavItem">
              <NavLink
                activeClassName="NavLink--active"
                to={path}
                exact={exact}
              >
                {label}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;

{
  /* <li className="NavItem">
          <NavLink
            exact
            className="NavLink"
            activeClassName="NavLink--active"
            to="/"
          >
            Homepage
          </NavLink>
        </li>
        <li className="NavItem">
          <NavLink
            className="NavLink"
            activeClassName="NavLink--active"
            to="/movies"
          >
            Movies
          </NavLink>
        </li> */
}
