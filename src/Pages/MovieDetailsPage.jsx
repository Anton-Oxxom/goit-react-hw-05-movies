import { useState, useEffect, lazy } from 'react';
import {
  useParams,
  useNavigate,
  useLocation,
  Routes,
  Route,
} from 'react-router-dom';

import { getDetails } from 'API/fetchMovies';
import { Loader } from 'components/Loader';
import { MovieDetails } from 'components/MovieDetails';

import styles from 'components/MovieDetails/MovieDetails.module.css';

const CastPage = lazy(() => import('./CastPage'));
const ReviewsPage = lazy(() => import('./ReviewsPage'));

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const onGoBack = () => {
    navigate(location?.state?.from ?? '/');
  };

  useEffect(() => {
    getDetails(movieId)
      .then(results => setMovie(results))
      .catch(error => setError(error.message));
  }, [movieId]);

  return (
    <>
      <button type="button" className={styles.button} onClick={onGoBack}>
        To Movies
      </button>
      {!movie && <Loader />}
      {movie && <MovieDetails movie={movie} />}
      {error && <p>Something went wrong, please try again later!</p>}
      <Routes>
        <Route path="cast" element={<CastPage />} />
        <Route path="reviews" element={<ReviewsPage />} />
      </Routes>
    </>
  );
};

export default MovieDetailsPage;