import categoryAction from '../constants/categoryAction';

/**
 * Actions to fetch category list
 */
const getCategory = () => ({
  type: categoryAction.GET_CATEGORIES
});

const getCategorySuccess = response => ({
  type: categoryAction.GET_CATEGORIES_SUCCESS,
  response
});

const getCategoryError = error => ({
  type: categoryAction.GET_CATEGORIES_ERROR,
  error
});

/**
 * Actions to create category
 */
const createCategory = categoryData => ({
  type: categoryAction.ADD_CATEGORY,
  categoryData
});

const createCategorySuccess = response => ({
  type: categoryAction.ADD_CATEGORY_SUCCESS,
  response
});

const createCategoryError = error => ({
  type: categoryAction.ADD_CATEGORY_ERROR,
  error
});

module.exports = {
  getCategory,
  getCategorySuccess,
  getCategoryError,
  createCategory,
  createCategorySuccess,
  createCategoryError
};
