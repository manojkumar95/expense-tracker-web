import { fromJS } from 'immutable';
import categoryAction from '../constants/categoryAction';

const initialState = fromJS({
  categoriesList: [],
  loading: false
});

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    // add category
    case categoryAction.ADD_CATEGORY:
      return state.set('loading', true);
    case categoryAction.ADD_CATEGORY_SUCCESS:
      return state.set('loading', false);
    case categoryAction.ADD_CATEGORY_ERROR:
      return state.set('loading', false);

    // get category list
    case categoryAction.GET_CATEGORIES:
      return state
        .set('loading', true)
        .set('categoriesList', []);
    case categoryAction.GET_CATEGORIES_SUCCESS:
      return state
        .set('loading', false)
        .set('categoriesList', action.response ? action.response.categories : []);
    case categoryAction.GET_CATEGORIES_ERROR:
      return state
        .set('loading', false)
        .set('error', action.error);

    default:
      return state;
  }
};

export default categoryReducer;
