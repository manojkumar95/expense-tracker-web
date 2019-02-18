import { call, put } from 'redux-saga/effects';
import {
  createCategorySuccess,
  createCategoryError,
  getCategorySuccess,
  getCategoryError

} from '../actions/category';
import {
  create,
  getCategories
} from '../service/category';

/**
 * Generator method to create category
 * @param {object} action
 * @param {object} action.categoryData category data to create
 */
function* createCategory(action) {
  try {
    const { categoryData } = action;
    const response = yield call(create, categoryData);
    yield put(createCategorySuccess(response));
  } catch (e) {
    yield put(createCategoryError(e));
  }
}

/**
 * Generator method to get all categories
 * @param {object} action
 */
function* getCategoryList() {
  try {
    const response = yield call(getCategories);
    yield put(getCategorySuccess(response));
  } catch (e) {
    yield put(getCategoryError(e));
  }
}

module.exports = {
  getCategoryList,
  createCategory
};
