import axios from 'axios/index';

const create = expenseData => axios({
  method: 'post',
  url: '/expense/create',
  data: expenseData
});

const getExpenses = () => axios({
  method: 'get',
  url: '/expenses'
});

module.exports = {
  create,
  getExpenses
};
