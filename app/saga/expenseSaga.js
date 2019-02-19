import { call, put } from 'redux-saga/effects';
import {
  createExpenseSuccess,
  createExpenseError,
  getExpensesSuccess,
  getExpensesError
} from '../actions/expense';
import {
  create,
  getExpenses,
  getExpensesByFilter
} from '../service/expense';
import Notification from '../components/Notification';

/**
 * Generator method to create expense
 * @param {object} action
 * @param {object} action.expenseData expense data to create
 */
function* createExpense(action) {
  try {
    const { expenseData } = action;
    const response = yield call(create, expenseData);
    yield put(createExpenseSuccess(response));
    Notification('success', 'Expense created successfully');
  } catch (e) {
    Notification('error', e.message);
    yield put(createExpenseError(e));
  }
}

/**
 * Generator method to get all expenses
 * @param {object} action
 */
function* getExpensesList() {
  try {
    const response = yield call(getExpenses);
    yield put(getExpensesSuccess(response));
  } catch (e) {
    yield put(getExpensesError(e));
  }
}

/**
 * Generator method to get all expenses
 * @param {object} action
 */
function* getExpensesByFiltersList(action) {
  try {
    const { filterData } = action;
    const response = yield call(getExpensesByFilter, filterData);
    yield put(getExpensesSuccess(response));
  } catch (e) {
    yield put(getExpensesError(e));
  }
}

module.exports = {
  getExpensesList,
  createExpense,
  getExpensesByFiltersList
};
