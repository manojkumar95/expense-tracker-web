import { call, put } from 'redux-saga/effects';
import UserActions from '../actions/user';
import UserService from '../service/user';

/**
 * Generator method to fetch user
 */
function* getUser() {
  try {
    const response = yield call(UserService.getUser);
    yield put(UserActions.getUserSuccess(response));
  } catch (e) {
    yield put(UserActions.getUserError(e));
  }
}

module.exports = {
  getUser
};
