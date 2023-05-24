import { call, put } from 'redux-saga/effects';
import { succeedVacancy, failVacancy } from '../../reducers/vacancy';
import { requestGetVacancy } from '../requests/vacancy';

export function* handleGetVacancy(action) {
  try {
    const response = yield call(requestGetVacancy, action.vacancyId);
    const { data } = response;
    yield put(succeedVacancy(data));
  } catch (error) {
    yield put(failVacancy(error));
  }
}
