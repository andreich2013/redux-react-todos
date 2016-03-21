/**
 * THIS IS THE ENTRY POINT FOR THE CLIENT, JUST LIKE server.js IS THE ENTRY POINT FOR THE SERVER.
 */
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import createStore from './scn.main/store/createStore';

// import ApiClient from './helpers/ApiClient';
import {Provider} from 'react-redux';
import { Router, browserHistory } from 'react-router';
// import { ReduxAsyncConnect } from 'redux-async-connect';
import useScroll from 'scroll-behavior/lib/useStandardScroll';
import getRoutes from './routes';

// const client = new ApiClient();
const history = useScroll(() => browserHistory)();
const store = createStore(history, {});

ReactDOM.render(
  <Provider store={store} key="provider">
      <Router history={history}>
          {getRoutes(store)}
      </Router>
  </Provider>,
  document.getElementById('root')
);

