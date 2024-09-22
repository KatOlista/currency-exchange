import { RateItem } from '..';
import { DEFAULT_CURRENCIES } from '../../utils/';

import styles from './RateList.module.scss';

export const RateList = ({ rates }) => {
  const filteredRates = rates.filter(
    ({ cc }) => cc === DEFAULT_CURRENCIES.usd || cc === DEFAULT_CURRENCIES.eur,
  );

  return (
    <ul className={styles.rates}>
      {filteredRates.map((rate) => (
        <RateItem key={rate.cc} rate={rate} />
      ))}
    </ul>
  );
};
