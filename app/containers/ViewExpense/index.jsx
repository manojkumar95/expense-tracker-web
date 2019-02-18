import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import ExpenseAction from '../../actions/expense';

import Table from '../../components/Table/ExpenseTable';

import '../../../assets/styles/containers/ViewExpense.scss';

class ViewExpense extends React.Component {
  componentDidMount() {
    this.props.getExpenses();
  }

  render() {
    const { expenses } = this.props;
    return (
      <div className="expense-container">
        <div>
          <div className="row m-t-b-25">
            <div className="col-md-10 col-6">
              <span className="expense-title">
                Expenses
              </span>
            </div>
            <div className="col-md-2 col-6 p-0">
              <Link to="/add-expense">
                <button
                  type="button"
                  className="btn btn-default active-btn float-right"
                >
                Create
                </button>
              </Link>
            </div>
          </div>
          <div className="row m-t-10 p-l-15">
            <div className="col-lg-12">
              <Table
                expenses={expenses}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ViewExpense.propTypes = {
  getExpenses: PropTypes.func.isRequired,
  expenses: PropTypes.array
};

ViewExpense.defaultProps = {
  expenses: []
};

const mapStateToProps = state => ({
  expenses: Array.from(state.expense.get('expensesList') || []),
  loading: state.expense.get('loading'),
  user: state.user.get('userId')
});

const mapDispatchToProps = dispatch => ({
  getExpenses: () => dispatch(ExpenseAction.getExpenses())
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewExpense);
