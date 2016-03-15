import { USERS_CREATE, USERS_READ, USERS_UPDATE, USERS_DELETE } from '../actions/users'

const updateState = (state, data) => Object.assign({}, state, data || {});

const users = (state, action) => {
  switch (action.type) {
    case [USERS_CREATE]:
      return updateState(state);
    case [USERS_READ]:
      return updateState(state);
    case [USERS_UPDATE]:
      return updateState(state);
    case [USERS_DELETE]:
      return updateState(state);
  }
}

export default users
