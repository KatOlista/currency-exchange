import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Exchanger, Footer, Header } from './components';
// import { setCurrencies, setCurrenciesLoading, setCurrenciesError } from './redux/features/currenciesSlice';
import { setRates, setRatesLoading, setRatesError } from './redux/features/ratesSlice';

// import { getCurrencies, getRates } from './utils';

import {getRates } from './utils';

// const curr = {
//   "success": true,
//   "symbols": {
//     "AED": "United Arab Emirates Dirham",
//     "AFN": "Afghan Afghani",
//     "USD": "UAS dollar",
//     "AMD": "Armenian Dram",
//     "UAH": "Ukr hrn",
//     }
// }

// const rate = {
//   "success": true,
//   "timestamp": 1519296206,
//   "base": "EUR",
//   "date": "2024-09-19",
//   "rates": {
//       "AED": 1.566015,
//       "AFN": 1.560132,
//       "AMD": 7.827874,
//       "UAH": 132.360679,
//       "USD": 1.23396,
//   }
// }

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(setCurrenciesLoading(true));

    // getCurrencies()
    //   .then(() => {
    //   // .then((currenciesFromServer) => {
    //     // dispatch(setCurrencies(currenciesFromServer));
    //     dispatch(setCurrencies(curr));
    //   })
    //   .catch(() => {
    //     dispatch(setCurrenciesError(true));
    //   })
    //   .finally(() => {
    //     dispatch(setCurrenciesLoading(false));
    //   });

    dispatch(setRatesLoading(true));

    getRates()
      .then((ratesFromServer) => {
        dispatch(setRates(ratesFromServer));
      // .then(() => {
      //   dispatch(setRates(rate));
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

      <Exchanger />

      <Footer />
    </div>
  );
};
