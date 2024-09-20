import styles from './RateItem.module.scss';

export const RateItem = ({ title, rate }) => {
  return <li className={styles.item}>
    <h2 className={styles.item__title}>{title}:</h2>
    <p>{rate}</p>
  </li>;
};
