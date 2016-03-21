// import { createReducer } from 'redux-create-reducer';
// import {
//    USERS_CREATE_REQUEST, USERS_CREATE_RECEIVE_SUCCESS, USERS_CREATE_RECEIVE_ERROR,
//    USERS_READ_REQUEST, USERS_READ_RECEIVE_SUCCESS, USERS_READ_RECEIVE_ERROR,
//    USERS_UPDATE_REQUEST, USERS_UPDATE_RECEIVE_SUCCESS, USERS_UPDATE_RECEIVE_ERROR,
//    USERS_DELETE_REQUEST, USERS_DELETE_RECEIVE_SUCCESS, USERS_DELETE_RECEIVE_ERROR
// } from '../actions/types';

const updateState = (state, data) => Object.assign({}, state, data || {});

const init = {
  isFetching: false,
  items: [],
  item: false
};

// export const users = createReducer(init, {
//
//  "USERS_READ_REQUEST"(state, action) {
//    return updateState(state, {
//      isFetching: true
//    });
//  },
//
//  "USERS_READ_RECEIVE_SUCCESS"(state, action) {
//    return updateState(state, {
//      isFetching: false,
//      items: action.data || []
//    });
//  },
//
//  "USERS_READ_RECEIVE_ERROR"(state, action) {
//    return updateState(state, {
//      isFetching: false
//    });
//  }
//
// });

const users = (state = init, action) => {
  const [data, id] = action.data ? action.data : [];

  switch (action.type) {
    case 'USERS_CREATE_REQUEST':
      return updateState(state, {
        isFetching: true
      });
    case 'USERS_CREATE_RECEIVE_SUCCESS':
      state.items.push(data);

      return updateState(state, {
        isFetching: false
      });
    case 'USERS_CREATE_RECEIVE_ERROR':
      return updateState(state, {
        isFetching: false
      });
    case 'USERS_READ_REQUEST':
      return updateState(state, {
        isFetching: true
      });
    case 'USERS_READ_RECEIVE_SUCCESS':
      return updateState(state, {
        isFetching: false,
        items: data || []
      });
    case 'USERS_READ_RECEIVE_ERROR':
      return updateState(state, {
        isFetching: false
      });
    case 'USERS_UPDATE_REQUEST':
      return updateState(state, {
        isFetching: true
      });
    case 'USERS_UPDATE_RECEIVE_SUCCESS':
      state.items.splice(state.items.indexOf(state.items.find((item) => item.id === id)), 1, data);

      return updateState(state, {
        isFetching: false
      });
    case 'USERS_UPDATE_RECEIVE_ERROR':
      return updateState(state, {
        isFetching: false
      });
    case 'USERS_DELETE_REQUEST':
      return updateState(state, {
        isFetching: true
      });
    case 'USERS_DELETE_RECEIVE_SUCCESS':
      state.items.splice(state.items.indexOf(state.items.find((item) => item.id === id)), 0);

      return updateState(state, {
        isFetching: false
      });
    case 'USERS_DELETE_RECEIVE_ERROR':
      return updateState(state, {
        isFetching: false
      });
    case 'USER_CHOOSE':
      return updateState(state, {
        item: state.items.find((item) => item.id === id)
      });
    default:
      return state;
  }
};

export default users;
