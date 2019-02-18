import { call, put } from 'redux-saga/effects';
import {
  createExpenseSuccess,
  createExpenseError,
  getExpensesSuccess,
  getExpensesError
} from '../actions/expense';
import {
  create,
  getExpenses
} from '../service/expense';

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
  } catch (e) {
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

module.exports = {
  getExpensesList,
  createExpense
};
