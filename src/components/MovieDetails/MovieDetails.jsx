import { useLocation, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './MovieDetails.module.css';

export const MovieDetails = ({ movie }) => {
  const {
    original_title,
    genres,
    overview,
    poster_path,
    release_date,
    vote_average,
  } = movie;

  const genresAll = genres.map(genre => genre.name).join(', ');
  const location = useLocation();

  return (
    <>
      <div className={styles.details_container}>
        <img
          className={styles.image}
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w300/${poster_path}`
              : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png'
          }
          alt={original_title}
        />
        <div className={styles.info}>
          <h1 className={styles.title}>{original_title}</h1>
          <h2 className={styles.release_date}> ({release_date})</h2>
          <p className={styles.score}>User Score: {vote_average}</p>
          <h2 className={styles.overview}>Overview</h2>
          <p className={styles.info_overview}>{overview}</p>
          <h2 className={styles.genres}>Genres</h2>
          <p>{genresAll}</p>
        </div>
      </div>
      <div className={styles.more_information}>
        <NavLink to="cast" className={styles.link} state={location.state}>
          Cast
        </NavLink>
        <NavLink to="reviews" className={styles.link} state={location.state}>
          Reviews
        </NavLink>
      </div>
    </>
  );
};

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    original_title: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
    overview: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
    release_date: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
  }).isRequired,
};