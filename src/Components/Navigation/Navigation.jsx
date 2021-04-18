import { NavLink } from 'react-router-dom';
import { routes } from '../../routes';
import './Navigation.scss';

const Navigation = () => {
  return (
    <nav>
      <ul className="NavList">
        {routes.map(({ path, label, exact }) => {
          return label ? (
            <li key={path} className="NavItem">
              <NavLink
                className="NavLink"
                activeClassName="NavLink--active"
                to={path}
                key={path}
                exact={exact}
              >
                {label}
              </NavLink>
            </li>
          ) : null;
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
