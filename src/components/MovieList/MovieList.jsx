import PropTypes from 'prop-types';

import { MovieListItem } from 'components/MovieList/MovieListItem/MovieListItem';

import styles from './MovieList.module.css';

export const MovieList = ({ movies }) => {
  return (
    <div className={styles.list_section}>
      <ul className={styles.list}>
        {movies.map(movie => (
          <MovieListItem key={movie.id} movie={movie} />
        ))}
      </ul>
    </div>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};