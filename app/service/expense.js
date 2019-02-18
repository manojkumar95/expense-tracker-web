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

const getExpensesByFilter = filterData => axios({
  method: 'post',
  url: '/expenses/filter',
  data: filterData
});

module.exports = {
  create,
  getExpenses,
  getExpensesByFilter
};
