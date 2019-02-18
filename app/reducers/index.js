import { combineReducers } from 'redux';
import userReducer from './userReducer';
import categoryReducer from './categoryReducer';
import expenseReducer from './expenseReducer';

export default combineReducers({
  user: userReducer,
  category: categoryReducer,
  expense: expenseReducer
});
