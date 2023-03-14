import { useState, useEffect } from 'react';

import { getTrending } from 'API/fetchMovies';
import { Loader } from 'components/Loader';
import { MovieList } from 'components/MovieList/MovieList';

import styles from 'components/MovieList/MovieList.module.css';

const HomePage = () => {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    getTrending()
      .then(results => setMovies([...results]))
      .catch(error => setError(error.message));
  }, []);

  return (
    <>
      <h2 className={styles.trending}>Trending Movies</h2>
      {!movies && <Loader />}
      {movies && <MovieList movies={movies} />}
      {error && <p>Something went wrong, please try again later!</p>}
    </>
  );
};

export default HomePage;