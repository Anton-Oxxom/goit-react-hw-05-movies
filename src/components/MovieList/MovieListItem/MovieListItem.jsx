import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './MovieListItem.module.css';

export const MovieListItem = ({ movie }) => {
  const { poster_path, name, title, id } = movie;
  const location = useLocation();

  return (
    <Link
      to={`/movies/${id}`}
      className={styles.link}
      state={{
        from: location.pathname + location.search,
      }}
    >
      <div className={styles.item}>
        <li>
          <img
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w300/${poster_path}`
                : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png'
            }
            alt={title}
            className={styles.image}
          />
        </li>
        <div className={styles.wrapper}>
          <p className={styles.title}>{title ?? name}</p>
        </div>
      </div>
    </Link>
  );
};

MovieListItem.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    poster_path: PropTypes.string,
    name: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};