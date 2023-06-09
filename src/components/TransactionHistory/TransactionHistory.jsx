import {
  TableStyled,
  TheadStyled,
  TbodyStyled,
} from './TransactionHistory.styled';
import PropTypes from 'prop-types';

const TransactionHistory = ({ items }) => {
  return (
    <TableStyled className="transaction-history">
      <TheadStyled>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </TheadStyled>

      <TbodyStyled>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          );
        })}
      </TbodyStyled>
    </TableStyled>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

export default TransactionHistory;
