import { combineReducers } from 'redux';

import { reducer as categories } from '~/store/ducks/categories';
import { reducer as products } from '~/store/ducks/products';
import { reducer as cart } from '~/store/ducks/cart';

const reducers = combineReducers({
  categories,
  products,
  cart,
});

export default reducers;
