import { combineReducers } from 'redux';
import { routeReducer } from 'react-router-redux';

import users from '../../scn.users/reducers/users';

export default combineReducers({
  routing: routeReducer,
  users
});