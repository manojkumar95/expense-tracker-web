import React from 'react';
import PropTypes from 'prop-types';
import '../../../assets/styles/components/Table.scss';
import '../../../assets/styles/components/ExpenseTable.scss';

const Table = ({ expenses }) => (
  <div className="table-container">
    <div className="table-container-head">
      <table>
        <thead>
          <tr className="head">
            <th className="column1">Id</th>
            <th className="column2">Title</th>
            <th className="column3">Amount</th>
            <th className="column4">Notes</th>
            <th className="column5">Categories</th>
          </tr>
        </thead>
      </table>
    </div>

    <div className="table-container-body">
      <table>
        <tbody>
          {expenses.map(expense => (
            <tr className="body" key={expense.title}>
              <td className="column1">{expense.id}</td>
              <td className="column2">{expense.title}</td>
              <td className="column3">{expense.amount}</td>
              <td className="column4">{expense.notes}</td>
              <td className="column5">{expense.categories.map(category => (
                <div key={category.name}>{category.name}</div>
              ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

Table.propTypes = {
  expenses: PropTypes.array.isRequired
};

export default Table;
