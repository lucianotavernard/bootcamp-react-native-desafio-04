import { all, takeLatest } from 'redux-saga/effects';

import { ProductsTypes } from '~/store/ducks/products';
import { CategoriesTypes } from '~/store/ducks/categories';

import { loadProducts } from '~/store/sagas/products';
import { loadCategories, selectCategory } from '~/store/sagas/categories';

export default function* rootSaga() {
  yield all([
    takeLatest(ProductsTypes.LOAD_PRODUCTS_REQUEST, loadProducts),
    takeLatest(CategoriesTypes.LOAD_CATEGORIES_REQUEST, loadCategories),
    takeLatest(CategoriesTypes.SELECT_CATEGORY_REQUEST, selectCategory),
  ]);
}
