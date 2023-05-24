import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from '@redux-saga/core';

import authReducer from './reducers/auth';

import { watcherSagaForAuth } from './sagas/rootSaga';

const reducer = combineReducers({
  auth: authReducer,
});

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const authStore = createStore(reducer, {}, compose(applyMiddleware(...middleware)));

sagaMiddleware.run(watcherSagaForAuth);

export default authStore;
