import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/**
 * Types & Actions Creators
 */

const { Types, Creators } = createActions({
  addProduct: ['product'],
  removeProduct: ['id'],
});

export const ProductTypes = Types;
export default Creators;

/**
 * Initial state
 */

const initialState = Immutable({
  data: [],
});

/**
 * Reducer
 */

export const reducer = createReducer(initialState, {
  [Types.ADD_PRODUCT]: (state, { product }) => state.merge({ data: [...state.data, product] }),
  [Types.REMOVE_PRODUCT]: (state, { id }) => state.merge({
    data: state.data.filter((product, index) => index !== id),
  }),
});
