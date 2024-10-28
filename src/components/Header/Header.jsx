import { useSelector } from 'react-redux';

import { RateList, Loader } from '..';

import styles from './Header.module.scss';

import Logo from '../../assets/icons/currency-exchange.svg?react';

export const Header = () => {
  const { isLoading, hasError, rates } = useSelector(
    (state) => state.currentRates,
  );

  const showError = !isLoading && hasError;
  const showContent = !isLoading && !hasError && !!rates.length;

  return (
    <header className={styles.header}>
      <a href="./">
        <Logo className={styles.header__logo} />
      </a>

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
