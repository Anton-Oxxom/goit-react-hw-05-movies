import { NavLink } from 'react-router-dom';

import styles from './Navigation.module.css';

export const Navigation = () => {
  return (
    <nav>
      <NavLink
        to="/"
        className={({ isActive }) => {
          return isActive
            ? [styles.link, styles.active].join(' ')
            : styles.link;
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="movies"
        className={({ isActive }) => {
          return isActive
            ? [styles.link, styles.active].join(' ')
            : styles.link;
        }}
      >
        Movies
      </NavLink>
    </nav>
  );
};