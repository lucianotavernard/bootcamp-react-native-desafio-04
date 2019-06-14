import { call, put } from 'redux-saga/effects';
import api from '~/services/api';

import CategoriesActions from '~/store/ducks/categories';
import ProductsActions from '~/store/ducks/products';

export function* loadCategories() {
  try {
    const { data } = yield call(api.get, 'categories');

    yield put(CategoriesActions.loadCategoriesSuccess(data));
  } catch (error) {
    console.tron.log(error);
  }
}

export function* selectCategory({ id }) {
  try {
    yield put(CategoriesActions.selectCategorySuccess(id));
    yield put(ProductsActions.loadProductsRequest(id));
  } catch (error) {
    console.tron.log(error);
  }
}
