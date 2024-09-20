import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  ratesLoaded: false,
  ratesHasError: false,
  currentRates: {},
};

export const ratesSlice = createSlice({
  name: 'rates',
  initialState,
  reducers: {
    setRatesLoading: (state, action) => {
      state.ratesLoaded = action.payload;
    },
    setRatesError: (state, action) => {
      state.ratesHasError = action.payload;
    },
    setRates: (state, action) => {
      state.currentRates = action.payload;
    },
  },
});

export default ratesSlice.reducer;
export const { setRates, setRatesLoading, setRatesError } = ratesSlice.actions;
