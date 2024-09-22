import { DEFAULT_CURRENCIES } from './constants';

const getRounded = (num) => {
  return Math.floor(num * 100) / 100;
};

export const convertCurrency = (amount, rate1, currency1, rate2, currency2) => {
  if (
    currency1 === DEFAULT_CURRENCIES.uah &&
    currency2 === DEFAULT_CURRENCIES.uah
  ) {
    getRounded(amount);
  }

  if (currency1 === DEFAULT_CURRENCIES.uah) {
    getRounded(amount / rate1);
  }

  if (currency2 === DEFAULT_CURRENCIES.uah) {
    getRounded(amount * rate1);
  }

  return getRounded((amount * rate1) / rate2);
};