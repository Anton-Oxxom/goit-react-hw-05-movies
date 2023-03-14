import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getReviews } from 'API/fetchMovies';
import { Reviews } from 'components/Reviews/Reviews';
import { Loader } from 'components/Loader';

const ReviewsPage = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    getReviews(movieId)
      .then(results => setReviews(results))
      .catch(error => setError(error.message));
  }, [movieId]);

  return (
    <>
      {!reviews && <Loader />}
      {reviews && <Reviews reviews={reviews} />}
      {error && <p>Something went wrong, please try again later!g</p>}
    </>
  );
};
export default ReviewsPage;