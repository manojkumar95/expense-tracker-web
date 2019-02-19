import axios from 'axios/index';

const getUser = () => axios({
  method: 'get',
  url: '/user'
});

const updateUser = userData => axios({
  method: 'post',
  url: '/user/update',
  data: userData
});

module.exports = {
  getUser,
  updateUser
};
