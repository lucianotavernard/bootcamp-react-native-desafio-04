import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/**
 * Types & Actions Creators
 */

const { Types, Creators } = createActions({
  loadProductsRequest: ['categoryId'],
  loadProductsSuccess: ['products'],
});

export const ProductsTypes = Types;
export default Creators;

/**
 * Initial state
 */

const initialState = Immutable({
  data: [],
  loading: false,
});

/**
 * Reducer
 */

export const reducer = createReducer(initialState, {
  [Types.LOAD_PRODUCTS_REQUEST]: state => state.merge({ loading: true }),
  [Types.LOAD_PRODUCTS_SUCCESS]: (state, { products }) => state.merge({
    data: products,
    loading: false,
  }),
});
