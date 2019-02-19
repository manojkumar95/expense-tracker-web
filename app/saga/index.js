import { takeLatest } from 'redux-saga/effects';
import userActions from '../constants/userAction';
import categoryActions from '../constants/categoryAction';
import expenseActions from '../constants/expenseAction';

import { getUser, updateUser } from './userSaga';
import { createCategory, getCategoryList } from './categorySaga';
import { createExpense, getExpensesList, getExpensesByFiltersList } from './expenseSaga';

export default function* saga() {
  // Methods for userSaga
  yield takeLatest(userActions.GET_USER, getUser);
  yield takeLatest(userActions.UPDATE_USER, updateUser);

  // Methods for categorySaga
  yield takeLatest(categoryActions.GET_CATEGORIES, getCategoryList);
  yield takeLatest(categoryActions.ADD_CATEGORY, createCategory);

  // Methods for expenseSaga
  yield takeLatest(expenseActions.GET_EXPENSES, getExpensesList);
  yield takeLatest(expenseActions.GET_EXPENSES_BY_FILTER, getExpensesByFiltersList);
  yield takeLatest(expenseActions.ADD_EXPENSE, createExpense);
}
