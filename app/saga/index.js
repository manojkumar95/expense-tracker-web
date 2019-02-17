import { takeLatest } from 'redux-saga/effects';
import userActions from '../constants/userAction';
import { getUser } from './userSaga';

export default function* saga() {
  yield takeLatest(userActions.GET_USER, getUser);
}
