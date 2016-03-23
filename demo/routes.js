import React from 'react';
import { IndexRoute, Route } from 'react-router';
import {
    UsersList,
    UserView
} from './users/containers';
import {
    Home
} from './home/containers';
import App from './main/components/App/App';

export default () => {
  // const requireLogin = (nextState, replace, cb) => {
  //  function checkAuth() {
  //    const { auth: { user }} = store.getState();
  //    if (!user) {
  //      // oops, not logged in, so can't be here!
  //      replace('/');
  //    }
  //    cb();
  //  }
  //
  //  if (!isAuthLoaded(store.getState())) {
  //    store.dispatch(loadAuth()).then(checkAuth);
  //  } else {
  //    checkAuth();
  //  }
  // };

  /**
   * Please keep routes in alphabetical order
   */
  return (
      <Route path="/" component={App}>
          <IndexRoute component={Home}/>
          <Route path="users" component={UsersList}/>
          <Route path="users/:userId" component={UserView}/>
      </Route>
  );
};
