import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul className="NavList">
        <li className="NavItem">
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
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
