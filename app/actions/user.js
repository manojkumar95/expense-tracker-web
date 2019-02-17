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
      }
    });
  }
}

export default new UserAction();
