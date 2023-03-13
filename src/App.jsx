import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { Header } from './components/Header';
import { Loader } from './components/Loader';

import styles from './App.module.css';

const HomePage = lazy(() => import('./components/Pages/HomePage'));
const MoviePage = lazy(() => import('./components/Pages/MoviePage'));
const MovieDetailsPage = lazy(() =>
  import('./components/Pages/MovieDetailsPage')
);

export const App = () => {
  return (
    <div className={styles.App}>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="movies" element={<MoviePage />} />
          <Route path="movies/:movieId/*" element={<MovieDetailsPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </div>
  );
};
