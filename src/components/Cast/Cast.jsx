import PropTypes from 'prop-types';

import styles from './Cast.module.css';

export const Cast = ({ cast }) => {
  return (
    <>
      <div className={styles.list_section}>
        <ul className={styles.list}>
          {cast.map(({ id, original_name, profile_path }) => (
            <li key={id} className={styles.item}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w300/${profile_path}`
                    : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png'
                }
                alt={original_name}
                className={styles.item_image}
              />
              <p className={styles.item_name}>{original_name}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

Cast.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      original_name: PropTypes.string.isRequired,
      profile_path: PropTypes.string,
    }).isRequired
  ),
};