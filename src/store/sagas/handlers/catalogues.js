import { call, put } from 'redux-saga/effects';
import { succeedCatalogues, failCatalogues } from '../../reducers/catalogues';
import { requestGetCatalogues } from '../requests/catalogues';

export function* handleGetCatalogues(action) {
  try {
    const response = yield call(requestGetCatalogues, action.token);
    const { data } = response;
    yield put(succeedCatalogues(data));
  } catch (error) {
    yield put(failCatalogues(error));
  }
}
