import { call, put } from 'redux-saga/effects';
import { succeedAuth, failAuth } from '../../reducers/auth';
import { requestGetAuth } from '../requests/auth';

export function* handleGetAuth() {
  try {
    const response = yield call(requestGetAuth);
    const { data } = response;
    yield put(succeedAuth(data.access_token));
  } catch (error) {
    yield put(failAuth(error));
  }
}
