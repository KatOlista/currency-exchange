import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  convertCurrency,
  DEFAULT_CURRENCIES,
  getSelectedCurrency,
} from '../../utils';
import { Loader, ConverterItem } from '../';
import { setUpperInput } from '../../redux/features/upperInputSlice';
import { setLowerInput } from '../../redux/features/lowerInputSlice';

import styles from './CurrencyConverter.module.scss';

export const CurrencyConverter = () => {
  const dispatch = useDispatch();
  const { isLoading, hasError, rates } = useSelector(
    (state) => state.currentRates,
  );
  const { upperInputValue } = useSelector((state) => state.upperInputValue);
  const { lowerInputValue } = useSelector((state) => state.lowerInputValue);

  const showError = !isLoading && hasError;
  const showContent = !isLoading && !hasError;

  ///////////////////////////

  const [selectedCurrency1, setSelectedCurrency1] = useState(DEFAULT_CURRENCIES.usd);
  const [selectedCurrency2, setSelectedCurrency2] = useState(DEFAULT_CURRENCIES.uah);



  const setInputValueOnUpperInputChange = (value) => {
    dispatch(setUpperInput(value));

    const selectedUpperCurrency = getSelectedCurrency(rates, selectedCurrency1);
    const selectedLowerCurrency = getSelectedCurrency(rates, selectedCurrency2);

    const calculatedValue = convertCurrency(
      value,
      selectedUpperCurrency.rate,
      selectedCurrency1,
      selectedLowerCurrency.rate,
      selectedCurrency2,
    );

    dispatch(setLowerInput(calculatedValue));
  };

  const setInputValueOnLowerInputChange = (value) => {
    dispatch(setLowerInput(value));

    const selectedUpperCurrency = getSelectedCurrency(rates, selectedCurrency1);
    const selectedLowerCurrency = getSelectedCurrency(rates, selectedCurrency2);

    const calculatedValue = convertCurrency(
      value,
      selectedLowerCurrency.rate,
      selectedCurrency2,
      selectedUpperCurrency.rate,
      selectedCurrency1,
    );
    dispatch(setUpperInput(calculatedValue));
  };

  const calculateUpperInputOnCurrencyChange = () => {
    console.log('currencyChange lower');

    const selectedUpperCurrency = getSelectedCurrency(rates, selectedCurrency1);
    const selectedLowerCurrency = getSelectedCurrency(rates, selectedCurrency2);

    const calculatedValue = convertCurrency(
      upperInputValue,
      selectedUpperCurrency.rate,
      selectedCurrency1,
      selectedLowerCurrency.rate,
      selectedCurrency2,
    );

    dispatch(setLowerInput(calculatedValue));
  };

  const calculateLowerInputOnCurrencyChange = () => {
    console.log('currencyChange upper');

    const selectedUpperCurrency = getSelectedCurrency(rates, selectedCurrency1);
    const selectedLowerCurrency = getSelectedCurrency(rates, selectedCurrency2);

    const calculatedValue = convertCurrency(
      lowerInputValue,
      selectedLowerCurrency.rate,
      selectedCurrency2,
      selectedUpperCurrency.rate,
      selectedCurrency1,
    );
    dispatch(setUpperInput(calculatedValue));
  };

  /////////////////////////////////

  return (
    <main className={styles.converter}>
      {isLoading && (
        <div className={styles.converter__loader}>
          <Loader />
        </div>
      )}

      {showError && <p>Something went wrong</p>}

      {showContent && (
        <>
          <h1 className={styles.converter__header}>Currency Converter</h1>

          <form className={styles.converter__form}>
            <ConverterItem
              inputValue={upperInputValue}
              setInputValue={setInputValueOnUpperInputChange}
              calculateInputOnCurrencyChange={
                calculateUpperInputOnCurrencyChange
              }
              selectedCc={selectedCurrency1}
              setSelectedCc={setSelectedCurrency1}
            />

            <ConverterItem
              inputValue={lowerInputValue}
              setInputValue={setInputValueOnLowerInputChange}
              setInputOnCurrencyChange={calculateLowerInputOnCurrencyChange}
              selectedCc={selectedCurrency2}
              setSelectedCc={setSelectedCurrency2}
            />
          </form>
        </>
      )}
    </main>
  );
};
