import api from '../helpers/usersApi';

import {
  USERS_CREATE_REQUEST, USERS_CREATE_RECEIVE_SUCCESS, USERS_CREATE_RECEIVE_ERROR,
  USERS_READ_REQUEST, USERS_READ_RECEIVE_SUCCESS, USERS_READ_RECEIVE_ERROR,
  USERS_UPDATE_REQUEST, USERS_UPDATE_RECEIVE_SUCCESS, USERS_UPDATE_RECEIVE_ERROR,
  USERS_DELETE_REQUEST, USERS_DELETE_RECEIVE_SUCCESS, USERS_DELETE_RECEIVE_ERROR
} from './types';


export const createUsers = (data) => {
  return {
    types: [USERS_CREATE_REQUEST, USERS_CREATE_RECEIVE_SUCCESS, USERS_CREATE_RECEIVE_ERROR],
    payload: {
      promise: api.create(data),
      data
    }
  };
};

export const readUsers = () => {
  return {
    types: [USERS_READ_REQUEST, USERS_READ_RECEIVE_SUCCESS, USERS_READ_RECEIVE_ERROR],
    payload: {
      promise: api.read()
    }
  };
};

export const updateUsers = (id) => {
  return {
    types: [USERS_UPDATE_REQUEST, USERS_UPDATE_RECEIVE_SUCCESS, USERS_UPDATE_RECEIVE_ERROR],
    payload: {
      promise: api.update(id),
      id
    }
  };
};

export const deleteUsers = (id) => {
  return {
    types: [USERS_DELETE_REQUEST, USERS_DELETE_RECEIVE_SUCCESS, USERS_DELETE_RECEIVE_ERROR],
    payload: {
      promise: api.delete(id),
      id
    }
  };
};
