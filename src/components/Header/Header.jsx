import { useSelector } from 'react-redux';

import Logo from '../../assets/icons/currency-exchange.svg?react';
import { RateList, Loader } from '..';

import styles from './Header.module.scss';

export const Header = () => {
  const { ratesLoaded, ratesHasError, currentRates } = useSelector(state => state.currentRates);
  const { currenciesLoaded, currenciesHasError } = useSelector(state => state.currencies);

  const isLoading = ratesLoaded && currenciesLoaded;
  const hasError = ratesHasError && currenciesHasError;

  return (
    <header className={styles.header}>
      <Logo className={styles.header__logo} />

      {isLoading && (<Loader />)}

      {!isLoading && hasError && (<p>Something went wrong</p>)}

      {!isLoading && !hasError && Object.keys(currentRates).length && (
        <RateList rateObject={currentRates} />
      )}
    </header>
  );
};
