import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { CurrencyConverter, Footer, Header } from './components';
import {
  setRates,
  setRatesLoading,
  setRatesError,
} from './redux/features/ratesSlice';

import { getFilteredRates, getRates } from './utils';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setRatesLoading(true));

    getRates()
      .then((ratesFromServer) => {
        const rates = getFilteredRates(ratesFromServer);
        dispatch(setRates(rates));
      })
      .catch(() => {
        dispatch(setRatesError(true));
      })
      .finally(() => {
        dispatch(setRatesLoading(false));
      });
  }, []);

  return (
    <div className="container">
      <Header />

      <CurrencyConverter />

      <Footer />
    </div>
  );
};
