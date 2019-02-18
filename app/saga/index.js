import { takeLatest } from 'redux-saga/effects';
import userActions from '../constants/userAction';
import categoryActions from '../constants/categoryAction';

import { getUser } from './userSaga';
import { createCategory, getCategoryList } from './categorySaga';

export default function* saga() {
  // Methods for userSaga
  yield takeLatest(userActions.GET_USER, getUser);

  // Methods for categorySaga
  yield takeLatest(categoryActions.GET_CATEGORIES, getCategoryList);
  yield takeLatest(categoryActions.ADD_CATEGORY, createCategory);
}
