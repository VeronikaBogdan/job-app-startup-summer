import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from '@redux-saga/core';

import cataloguesReducer from './reducers/catalogues';
import vacanciesReducer from './reducers/vacancies';
import vacancyReducer from './reducers/vacancy';
import {
  watcherSagaForCatalogues,
  watcherSagaForVacancies,
  watcherSagaForVacancy,
} from './sagas/rootSaga';

const reducer = combineReducers({
  catalogues: cataloguesReducer,
  vacancies: vacanciesReducer,
  vacancy: vacancyReducer,
});

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = createStore(reducer, {}, compose(applyMiddleware(...middleware)));

sagaMiddleware.run(watcherSagaForCatalogues);
sagaMiddleware.run(watcherSagaForVacancies);
sagaMiddleware.run(watcherSagaForVacancy);

export default store;
