import { fromJS } from 'immutable';
import expenseAction from '../constants/expenseAction';

const initialState = fromJS({
  expensesList: [],
  loading: false,
  filteredExpensesList: []
});

const expenseReducer = (state = initialState, action) => {
  switch (action.type) {
    // add expense
    case expenseAction.ADD_EXPENSE:
      return state.set('loading', true);
    case expenseAction.ADD_EXPENSE_SUCCESS:
      return state.set('loading', false);
    case expenseAction.ADD_EXPENSE_ERROR:
      return state.set('loading', false);

    // get expense list
    case expenseAction.GET_EXPENSES:
      return state
        .set('loading', true)
        .set('expensesList', []);
    case expenseAction.GET_EXPENSES_SUCCESS:
      return state
        .set('loading', false)
        .set('expensesList', action.response ? action.response.expenses : []);
    case expenseAction.GET_EXPENSES_ERROR:
      return state
        .set('loading', false)
        .set('error', action.error);

    // get expense by filters list
    case expenseAction.GET_EXPENSES_BY_FILTER:
      return state
        .set('loading', true)
        .set('filteredExpensesList', []);
    case expenseAction.GET_EXPENSES_BY_FILTER_SUCCESS:
      return state
        .set('loading', false)
        .set('filteredExpensesList', action.response ? action.response.expenses : []);
    case expenseAction.GET_EXPENSES_BY_FILTER_ERROR:
      return state
        .set('loading', false)
        .set('error', action.error);

    default:
      return state;
  }
};

export default expenseReducer;
