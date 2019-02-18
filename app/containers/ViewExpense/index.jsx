import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import ExpenseAction from '../../actions/expense';

import Table from '../../components/Table/ExpenseTable';
import ExpenseChart from '../../components/ExpenseChart';
import FilterExpense from '../../components/ExpenseChart/FilterExpense';

import '../../../assets/styles/containers/ViewExpense.scss';

class ViewExpense extends React.Component {
  constructor() {
    super();
    this.state = {
      dateValue: '',
      selectedFilter: {}
    };
  }
  componentDidMount() {
    this.props.getExpenses();
  }

  onFilterDateChange = value => {
    this.setState({
      dateValue: value
    });
  }

  onFilterChange = value => {
    this.setState({
      selectedFilter: value
    });
  }

  applyFilters = () => {
    const { selectedFilter, dateValue } = this.state;
    this.props.getExpensesByFilters({
      fromDate: dateValue,
      period: selectedFilter
    });
  }

  render() {
    const { expenses, filteredExpensesList } = this.props;
    const { dateValue, selectedFilter } = this.state;
    return (
      <Fragment>
        <div className="expense-container">
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
        <div className="expense-container">
          <div className="row m-t-b-25">
            <div className="col-md-12 col-12">
              <span className="expense-title">
                Expense Chart Representation
              </span>
            </div>
          </div>
          <div className="row m-t-10 p-l-15">
            <div className="col-lg-3">
              <div className="table-container filter-container">
                <FilterExpense
                  onFilterDateChange={this.onFilterDateChange}
                  dateValue={dateValue}
                  onFilterChange={this.onFilterChange}
                  selectedFilter={selectedFilter}
                  applyFilters={this.applyFilters}
                />
              </div>
            </div>
            <div className="col-lg-9">
              <ExpenseChart
                expenses={filteredExpensesList}
              />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

ViewExpense.propTypes = {
  getExpenses: PropTypes.func.isRequired,
  getExpensesByFilters: PropTypes.func.isRequired,
  expenses: PropTypes.array,
  filteredExpensesList: PropTypes.array
};

ViewExpense.defaultProps = {
  expenses: [],
  filteredExpensesList: []
};

const mapStateToProps = state => ({
  expenses: Array.from(state.expense.get('expensesList') || []),
  filteredExpensesList: Array.from(state.expense.get('filteredExpensesList') || []),
  loading: state.expense.get('loading'),
  user: state.user.get('userId')
});

const mapDispatchToProps = dispatch => ({
  getExpenses: () => dispatch(ExpenseAction.getExpenses()),
  getExpensesByFilters: filters => dispatch(ExpenseAction.getExpensesByFilters(filters))
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewExpense);
