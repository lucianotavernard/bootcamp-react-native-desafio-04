import { call, put } from 'redux-saga/effects';
import api from '~/services/api';

import ProductsActions from '~/store/ducks/products';

export function* loadProducts({ categoryId }) {
  try {
    const { data } = yield call(api.get, `category_products/${categoryId}`);

    yield put(ProductsActions.loadProductsSuccess(data.products));
  } catch (error) {
    console.tron.log(error);
  }
}
