export const getSelectedRate = (rates, currency) => {
  rates.find(({ cc }) => cc === currency);
};
