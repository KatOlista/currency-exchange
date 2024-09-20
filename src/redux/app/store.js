import { configureStore } from '@reduxjs/toolkit';
import currenciesReducer from '../features/currenciesSlice';
import ratesReducer from '../features/ratesSlice';

export const store = configureStore({
  reducer: {
    currencies: currenciesReducer,
    currentRates: ratesReducer,
  },
});
