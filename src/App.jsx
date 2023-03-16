import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { Header } from './components/Header';
import { Loader } from './components/Loader';

import styles from './App.module.css';

const HomePage = lazy(() => import('./Pages/HomePage'));
const MoviePage = lazy(() => import('./Pages/MoviePage'));
const MovieDetailsPage = lazy(() =>
  import('./Pages/MovieDetailsPage')
);
const CastPage= lazy(() =>
  import('./Pages/CastPage')
);
const ReviewsPage= lazy(() =>
  import('./Pages/ReviewsPage')
);

export const App = () => {
  return (
    <div className={styles.App}>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="movies" element={<MoviePage />} />
          <Route path="movies/:movieId" element={<MovieDetailsPage />} />
          <Route path="movies/:movieId/cast" element={<CastPage />} />
          <Route path="movies/:movieId/reviews" element={<ReviewsPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </div>
  );
};
