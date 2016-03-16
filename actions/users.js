const makeAction = (type) => {
  return (...rest) => {
    return {
      type,
      //...rest
    }
  }
}



export const REQUEST = 'REQUEST';
export const RECEIVE_SUCCESS = 'RECEIVE_SUCCESS';
export const RECEIVE_ERROR = 'RECEIVE_ERROR';

export const USERS_CREATE = 'USERS_CREATE';
export const USERS_READ = 'USERS_READ';
export const USERS_UPDATE = 'USERS_UPDATE';
export const USERS_DELETE = 'USERS_DELETE';

export const createUsers = (data) => makeAction(USERS_CREATE);
export const readUsers = (dispatch) => {
  api.read()
      .then((response) => response.json())
      .then(dispatch(`${type}.${RECEIVE_SUCCESS}`))

  return {
    type: USERS_READ,
    list: ids || []
  }
};
export const updateUsers = (id) => makeAction(USERS_UPDATE);
export const deleteUsers = (id) => makeAction(USERS_DELETE);
