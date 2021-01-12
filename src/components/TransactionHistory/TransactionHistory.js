import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={s.TransactionHistory}>
      <thead>
        <tr>
          <th className={s.Title}>Type</th>
          <th className={s.Title}>Amount</th>
          <th className={s.Title}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <td className={s.History}>{item.type}</td>
            <td className={s.History}>{item.amount}</td>
            <td className={s.History}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propType = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default TransactionHistory;
