import expenseAction from '../constants/expenseAction';

/**
 * Actions to fetch expense list
 */
const getExpenses = () => ({
  type: expenseAction.GET_EXPENSES
});

const getExpensesSuccess = response => ({
  type: expenseAction.GET_EXPENSES_SUCCESS,
  response
});

const getExpensesError = error => ({
  type: expenseAction.GET_EXPENSES_ERROR,
  error
});

/**
 * Actions to fetch expense list by filters
 */
const getExpensesByFilters = filterData => ({
  type: expenseAction.GET_EXPENSES_BY_FILTER,
  filterData
});

const getExpensesByFiltersSuccess = response => ({
  type: expenseAction.GET_EXPENSES_BY_FILTER_SUCCESS,
  response
});

const getExpensesByFiltersError = error => ({
  type: expenseAction.GET_EXPENSES_BY_FILTER_ERROR,
  error
});

/**
 * Actions to create expense
 */
const createExpense = expenseData => ({
  type: expenseAction.ADD_EXPENSE,
  expenseData
});

const createExpenseSuccess = response => ({
  type: expenseAction.ADD_EXPENSE_SUCCESS,
  response
});

const createExpenseError = error => ({
  type: expenseAction.ADD_EXPENSE_ERROR,
  error
});

module.exports = {
  getExpenses,
  getExpensesSuccess,
  getExpensesError,
  createExpense,
  createExpenseSuccess,
  createExpenseError,
  getExpensesByFilters,
  getExpensesByFiltersSuccess,
  getExpensesByFiltersError
};
