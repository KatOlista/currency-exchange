import { useSelector } from 'react-redux';

import { Loader } from '../Loader/Loader';

import styles from './Exchanger.module.scss';

export const Exchanger = () => {
  const { ratesLoaded, ratesHasError } = useSelector(state => state.currentRates);
  const { currenciesLoaded, currenciesHasError } = useSelector(state => state.currencies);

  const isLoading = ratesLoaded && currenciesLoaded;
  const hasError = ratesHasError && currenciesHasError;

  return (
    <main className={styles.exchanger}>
      {isLoading && (<Loader />)}

      {!isLoading && hasError && (<p>Something went wrong</p>)}

      {!isLoading && !hasError && (
        <form>
          Exchanger
        </form>
      )}
    </main>
  );
};
