import { call, put } from 'redux-saga/effects';
import { succeedVacancies, failVacancies } from '../../reducers/vacancies';
import { requestGetVacancies } from '../requests/vacancies';

export function* handleGetVacancies(action) {
  try {
    const response = yield call(requestGetVacancies, action.searchData);
    const { data } = response;
    yield put(succeedVacancies(data));
  } catch (error) {
    yield put(failVacancies(error));
  }
}
