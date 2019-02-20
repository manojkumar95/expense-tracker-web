import { fromJS } from 'immutable';

import userActions from '../constants/userAction';

const initialState = fromJS({
  userId: '',
  firstName: '',
  lastName: '',
  userError: ''
});

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userActions.GET_USER:
      return state.set('loading', true);
    case userActions.GET_USER_SUCCESS:
      return state
        .set('userId', action.user.userId)
        .set('firstName', action.user.firstName)
        .set('lastName', action.user.lastName)
        .set('phoneNumber', action.user.phoneNumber)
        .set('loading', false);
    case userActions.GET_USER_ERROR:
      return state
        .set('userError', action.error)
        .set('loading', false);
    case userActions.UPDATE_USER:
      return state.set('loading', true);
    case userActions.UPDATE_USER_SUCCESS:
      return state
        .set('userId', action.user.user)
        .set('firstName', action.user.firstName)
        .set('lastName', action.user.lastName)
        .set('phoneNumber', action.user.phoneNumber)
        .set('loading', false);
    case userActions.UPDATE_USER_ERROR:
      return state
        .set('userError', action.error)
        .set('loading', false);
    default:
      return state;
  }
};

export default userReducer;
