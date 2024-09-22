export const getSelectedCurrency = (rates, query) =>
  rates.find(({ cc }) => cc === query);
