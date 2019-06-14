import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/**
 * Types & Actions Creators
 */

const { Types, Creators } = createActions({
  loadCategoriesRequest: null,
  loadCategoriesSuccess: ['categories'],
  selectCategoryRequest: ['id'],
  selectCategorySuccess: ['id'],
});

export const CategoriesTypes = Types;
export default Creators;

/**
 * Initial state
 */

const initialState = Immutable({
  selected: 1,
  data: [],
});

/**
 * Reducer
 */

export const reducer = createReducer(initialState, {
  [Types.LOAD_CATEGORIES_SUCCESS]: (state, { categories }) => state.merge({ data: categories }),
  [Types.SELECT_CATEGORY_SUCCESS]: (state, { id }) => state.merge({ selected: id }),
});
