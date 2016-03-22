import { createReducer } from 'redux-create-reducer';
import { updateState } from '../../scn.common/helpers/utils';

import {
  USERS_CREATE_REQUEST, USERS_CREATE_RECEIVE_SUCCESS, USERS_CREATE_RECEIVE_ERROR,
  USERS_READ_REQUEST, USERS_READ_RECEIVE_SUCCESS, USERS_READ_RECEIVE_ERROR,
  USERS_UPDATE_REQUEST, USERS_UPDATE_RECEIVE_SUCCESS, USERS_UPDATE_RECEIVE_ERROR,
  USERS_DELETE_REQUEST, USERS_DELETE_RECEIVE_SUCCESS, USERS_DELETE_RECEIVE_ERROR,
  USER_CHOOSE
} from '../actions/types';

const init = {
  isFetching: false,
  items: [],
  item: false
};

export const users = createReducer(init, {

  [USERS_CREATE_REQUEST](state, action) {
    return updateState(state, {
      isFetching: true
    });
  },

  [USERS_CREATE_RECEIVE_SUCCESS](state, action) {
    const [ data ] = action.payload;

    state.items.push(data);

    return updateState(state, {
      isFetching: false
    });
  },

  [USERS_CREATE_RECEIVE_ERROR](state, action) {
    return updateState(state, {
      isFetching: false
    });
  },

  [USERS_READ_REQUEST](state, action) {
    return updateState(state, {
      isFetching: true
    });
  },

  [USERS_READ_RECEIVE_SUCCESS](state, action) {
    const [ data ] = action.payload;

    return updateState(state, {
      isFetching: false,
      items: data || []
    });
  },

  [USERS_READ_RECEIVE_ERROR](state, action) {
    return updateState(state, {
      isFetching: false
    });
  },

  [USERS_UPDATE_REQUEST](state, action) {
    return updateState(state, {
      isFetching: true
    });
  },

  [USERS_UPDATE_RECEIVE_SUCCESS](state, action) {
    const [data, id] = action.payload;

    state.items.splice(state.items.indexOf(state.items.find((item) => item.id === id)), 1, data);

    return updateState(state, {
      isFetching: false
    });
  },

  [USERS_UPDATE_RECEIVE_ERROR](state, action) {
    return updateState(state, {
      isFetching: false
    });
  },

  [USERS_DELETE_REQUEST](state, action) {
    return updateState(state, {
      isFetching: true
    });
  },

  [USERS_DELETE_RECEIVE_SUCCESS](state, action) {
    const [data, id] = action.payload;

    state.items.splice(state.items.indexOf(state.items.find((item) => item.id === id)), 0);

    return updateState(state, {
      isFetching: false
    });
  },

  [USERS_DELETE_RECEIVE_ERROR](state, action) {
    return updateState(state, {
      isFetching: false
    });
  },

  [USER_CHOOSE](state, action) {
    const [data, id] = action.payload;

    return updateState(state, {
      item: state.items.find((item) => item.id === id)
    });
  }

});

export default users;
