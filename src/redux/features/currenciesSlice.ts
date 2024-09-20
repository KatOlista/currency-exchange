import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currenciesLoaded: false,
  currenciesHasError: false,
  currencies: {},
};

export const currenciesSlice = createSlice({
  name: 'currencies',
  initialState,
  reducers: {
    setCurrenciesLoading: (state, action) => {
      state.currenciesLoaded = action.payload;
    },
    setCurrenciesError: (state, action) => {
      state.currenciesHasError = action.payload;
    },
    setCurrencies: (state, action) => {
      state.currencies = action.payload;
    },
  },
});

export default currenciesSlice.reducer;
export const { setCurrencies, setCurrenciesLoading, setCurrenciesError } = currenciesSlice.actions;
