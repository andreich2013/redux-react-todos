import { createStore as _createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import asyncMiddleware from 'redux-async';
import { syncHistory } from 'react-router-redux';
import rootReducer from '../../../reducers';

export default function createStore(history, initialState) {
  // Sync dispatched route actions to the history
  const reduxRouterMiddleware = syncHistory(history);

  const middleware = [
    thunkMiddleware,
    asyncMiddleware,
    reduxRouterMiddleware
  ];

  const store = applyMiddleware(...middleware)(_createStore)(rootReducer, initialState);

  reduxRouterMiddleware.listenForReplays(store);

  return store;
}
