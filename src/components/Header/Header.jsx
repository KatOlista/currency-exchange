import { useSelector } from 'react-redux';

import Logo from '../../assets/icons/currency-exchange.svg?react';
import { RateList, Loader } from '..';

import styles from './Header.module.scss';

export const Header = () => {
  const { isLoading, hasError, rates } = useSelector(
    (state) => state.currentRates,
  );

  const showError = !isLoading && hasError;
  const showContent = !isLoading && !hasError && !!rates.length;

  return (
    <header className={styles.header}>
      <Logo className={styles.header__logo} />

      {isLoading && (
        <div className={styles.header__loader}>
          <Loader />
        </div>
      )}

      {showError && <p>Something went wrong</p>}

      {showContent && <RateList rates={rates} />}
    </header>
  );
};
