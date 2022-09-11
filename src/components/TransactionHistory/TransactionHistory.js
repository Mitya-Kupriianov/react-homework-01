import s from './TransactionHistory.module.css';
import PropTypes from 'prop-types';
import TransactionItem from './TransactionItem';

export default function TransactionHistory({ items }) {
  return (
    <table className={s.table}>
      <thead>
        <tr>
          <th className={s.theadText}>Type</th>
          <th className={s.theadText}>Amount</th>
          <th className={s.theadText}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <TransactionItem type={type} amount={amount} currency={currency} />
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
