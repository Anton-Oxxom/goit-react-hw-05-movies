import PropTypes from 'prop-types';

import styles from './Reviews.module.css';

export const Reviews = ({ reviews }) => {
  return (
    <>
      <div className={styles.list_reviews}>
        <ul className={styles.list}>
          {reviews.map(({ id, created_at, content, author }) => (
            <li key={id} className={styles.item}>
              <h2 className={styles.author}>{author}</h2>
              <p className={styles.created}>{created_at}</p>
              <p className={styles.content}>{content}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      created_at: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    })
  ).isRequired,
};