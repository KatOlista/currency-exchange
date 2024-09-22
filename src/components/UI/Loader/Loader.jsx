import styles from './Loader.module.scss';

import LoaderIcon from '../../../assets/icons/circles-loader.svg?react';

export const Loader = () => {
  return (
    <div className={styles.loader}>
      <LoaderIcon className={styles.loader__icon} />
    </div>
  );
};
