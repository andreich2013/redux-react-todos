/**
 * THIS IS THE ENTRY POINT FOR THE CLIENT, JUST LIKE server.js IS THE ENTRY POINT FOR THE SERVER.
 */
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import createStore from './main/store/createStore';
import {Provider} from 'react-redux';
import { Router, browserHistory } from 'react-router';
import useScroll from 'scroll-behavior/lib/useStandardScroll';
import getRoutes from './routes';
import styles from 'assets/styles/main.scss';

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

