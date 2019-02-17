import axios from 'axios/index';

export default class UserService {
  static getUser() {
    return axios({
      method: 'get',
      url: '/user'
    });
  }
}
