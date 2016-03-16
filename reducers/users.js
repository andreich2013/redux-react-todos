import {
    USERS_CREATE, USERS_READ, USERS_UPDATE, USERS_DELETE,
    REQUEST, RECEIVE_SUCCESS, RECEIVE_ERROR
} from '../actions/users'

const updateState = (state, data) => Object.assign({}, state, data || {});

const initAsync = {
  isFetching: false,
  ids: []
};

const makeAsync = (type) => {
  return function (state, action) {
    switch (action.type) {
      case [`${type}.${REQUEST}`]:
        return updateState(state, {
          isFetching: true
        });
      case [`${type}.${RECEIVE_SUCCESS}`]:
        return updateState(state, {
          isFetching: false,
          items: action.items
        });
      case [`${type}.${RECEIVE_ERROR}`]:
        return updateState(state, {
          isFetching: false
        });
      default:
        return state;
    }
  }
}

let asyncCreate = makeAsync(USERS_CREATE)
let asyncRead = makeAsync(USERS_READ)
let asyncUpdate = makeAsync(USERS_UPDATE)
let asyncDelete = makeAsync(USERS_DELETE)

const users = (state = [], action) => {
  switch (action.type) {
    case "USERS_CREATE":
      return (state, action) => asyncCreate;
    case "USERS_READ":
      return (state, action) => asyncRead;
    case "USERS_UPDATE":
      return (state, action) => asyncUpdate;
    case "USERS_DELETE":
      return (state, action) => asyncDelete;
    default:
      return state;
  }
}

export default users
