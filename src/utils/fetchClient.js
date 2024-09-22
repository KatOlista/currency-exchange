const url = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';

export const getRates = () => {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error();
    }

    return response.json();
  });
};
