import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/**
 * Types & Actions Creators
 */

const { Types, Creators } = createActions({
  addProduct: ['product'],
  removeProduct: ['id'],
  updateAmount: ['id', 'amount'],
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
  [Types.ADD_PRODUCT]: (state, { product }) => {
    const productFinded = state.data.find(item => item.id === product.id);

    if (productFinded) {
      const amount = productFinded.amount + 1;

      return state.merge({
        data: state.data.map(item => (item.id === product.id ? { ...item, amount } : item)),
      });
    }

    return state.merge({
      data: [...state.data, { ...product, amount: 1 }],
    });
  },

  [Types.REMOVE_PRODUCT]: (state, { id }) => state.merge({
    data: state.data.filter(item => item.id !== id),
  }),

  [Types.UPDATE_AMOUNT]: (state, { id, amount }) => state.merge({
    data: state.data.map(item => (item.id === id ? { ...item, amount } : item)),
  }),
});
