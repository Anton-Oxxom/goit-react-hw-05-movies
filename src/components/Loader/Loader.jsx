import { Rings } from 'react-loader-spinner';

import styles from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={styles.loader}>
      <Rings height="500" width="500" color="#7FFFD4" ariaLabel="loading" />
    </div>
  );
};