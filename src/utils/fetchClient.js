// const BASE_URL = 'https://data.fixer.io/api/';
// const API_KEY = '?access_key=05b4d46e286fd67d5d34742b9643280d';

// const CURRENCIES = 'symbols';
// const ACTUAL_RATE = 'latest';

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
//       "UAH": 13.360679,
//       "USD": 1.23396,
//   }
// }


// export const getCurrencies = () => {
//   return fetch(`${BASE_URL}${CURRENCIES}${API_KEY}`).then((response) => {
//     if (!response.ok) {
//       throw new Error();
//     }

//     return response.json();
//   });
// };

// export const getRates = () => {
//   return fetch(`${BASE_URL}${ACTUAL_RATE}${API_KEY}`).then((response) => {
//     if (!response.ok) {
//       throw new Error();
//     }

//     return response.json();
//   });
// };


const url = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';

export const getRates = () => {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error();
    }

    return response.json();
  });
};
