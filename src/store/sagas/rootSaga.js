import { takeLatest } from 'redux-saga/effects';

import { handleGetAuth } from './handlers/auth';
import { handleGetCatalogues } from './handlers/catalogues';
import { handleGetVacancies } from './handlers/vacancies';
import { handleGetVacancy } from './handlers/vacancy';
import { AUTH_REQUEST } from '../reducers/auth';
import { CATALOGUES_REQUEST } from '../reducers/catalogues';
import { VACANCIES_REQUEST } from '../reducers/vacancies';
import { VACANCY_REQUEST } from '../reducers/vacancy';

export function* watcherSagaForAuth() {
  yield takeLatest(AUTH_REQUEST, handleGetAuth);
}

export function* watcherSagaForCatalogues() {
  yield takeLatest(CATALOGUES_REQUEST, handleGetCatalogues);
}

export function* watcherSagaForVacancies() {
  yield takeLatest(VACANCIES_REQUEST, handleGetVacancies);
}

export function* watcherSagaForVacancy() {
  yield takeLatest(VACANCY_REQUEST, handleGetVacancy);
}
