import axios from 'axios/index';

const create = categoryData => axios({
  method: 'post',
  url: '/category/create',
  data: categoryData
});

const getCategories = () => axios({
  method: 'get',
  url: '/categories'
});

module.exports = {
  create,
  getCategories
};
