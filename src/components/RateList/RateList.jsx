import { RateItem } from '..';
import { USD, EUR } from '../../utils/';

import styles from './RateList.module.scss';

// {r030: 124, txt: "Канадський долар", rate: 30.5706, cc: "CAD", exchangedate: "20.09.2024"}

export const RateList = ({ rateObject }) => {
  const rates = Object.entries(rateObject.cc);

  console.log(rates);

  const filteredRates = rates.filter((pare) => pare[0] === USD || pare[0] === EUR);

  return (
    <ul className={styles.rates}>
      {filteredRates.map(pare => (
        <RateItem key={pare[0]} title={pare[0]} rate={pare[1]} />
      ))}
    </ul>
  );
};
