import { createStore as _createStore, applyMiddleware } from 'redux';
import promiseMiddleware from '../../scn.common/middlewares/promise';
import { syncHistory } from 'react-router-redux';
import rootReducer from '../../../reducers';
import thunkMiddleware from 'redux-thunk';

export default function createStore(history, initialState) {
  // Sync dispatched route actions to the history
  const reduxRouterMiddleware = syncHistory(history);

  const middleware = [
    thunkMiddleware,
    promiseMiddleware,
    reduxRouterMiddleware
  ];

  const store = applyMiddleware(...middleware)(_createStore)(rootReducer, initialState);

  reduxRouterMiddleware.listenForReplays(store);

  return store;
}
