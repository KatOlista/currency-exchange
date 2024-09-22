import { CurrencySelect, CurrencyInput } from '..';
import { validateInput } from '../../utils';

import styles from './ConverterItem.module.scss';

export const ConverterItem = ({
  inputValue,
  setInputValue,
  setInputOnCurrencyChange,
  selectedCc,
  setSelectedCc,
}) => {
  const changeInputValueHandler = (e) => {
    setInputValue(validateInput(e.target.value));
  };

  const changeSelectHandler = (e) => {
    setSelectedCc(e.target.value);
    setInputOnCurrencyChange();
  };

  return (
    <div className={styles.item}>
      <CurrencySelect value={selectedCc} onChange={changeSelectHandler} />

      <CurrencyInput value={inputValue} onChange={changeInputValueHandler} />
    </div>
  );
};
