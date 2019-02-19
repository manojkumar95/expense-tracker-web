import BaseAction from './BaseAction';
import constants from '../constants/userAction';

class UserAction extends BaseAction {
  constructor() {
    super({
      getUser: {
        type: constants.GET_USER,
        params: []
      },
      getUserSuccess: {
        type: constants.GET_USER_SUCCESS,
        params: ['user']
      },
      getUserError: {
        type: constants.GET_USER_ERROR,
        params: ['error']
      },
      updateUser: {
        type: constants.UPDATE_USER,
        params: ['userData']
      },
      updateUserSuccess: {
        type: constants.UPDATE_USER_SUCCESS,
        params: ['user']
      },
      updateUserError: {
        type: constants.UPDATE_USER_ERROR,
        params: ['error']
      }
    });
  }
}

export default new UserAction();
