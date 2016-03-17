import UsersApi from '../middleware/UsersApi'

const api = new UsersApi();

const makeAction = (type) => {
  return (...rest) => {
    return {
      type,
      data: rest
    }
  }
}



export const USERS_CREATE_REQUEST = "USERS_CREATE_REQUEST";
export const USERS_CREATE_RECEIVE_SUCCESS = "USERS_CREATE_RECEIVE_SUCCESS";
export const USERS_CREATE_RECEIVE_ERROR = "USERS_CREATE_RECEIVE_ERROR";

export const USERS_READ_REQUEST = "USERS_READ_REQUEST";
export const USERS_READ_RECEIVE_SUCCESS = "USERS_READ_RECEIVE_SUCCESS";
export const USERS_READ_RECEIVE_ERROR = "USERS_READ_RECEIVE_ERROR";

export const USERS_UPDATE_REQUEST = "USERS_UPDATE_REQUEST";
export const USERS_UPDATE_RECEIVE_SUCCESS = "USERS_UPDATE_RECEIVE_SUCCESS";
export const USERS_UPDATE_RECEIVE_ERROR = "USERS_UPDATE_RECEIVE_ERROR";

export const USERS_DELETE_REQUEST = "USERS_DELETE"
export const USERS_DELETE_RECEIVE_SUCCESS = "USERS_DELETE_RECEIVE_SUCCESS";
export const USERS_DELETE_RECEIVE_ERROR = "USERS_DELETE_RECEIVE_ERROR";

export const USER_CHOOSE = "USER_CHOOSE";

export const USER_TOGGLE_UPDATE_BUTTON_STATE = "USER_TOGGLE_UPDATE_BUTTON_STATE";



export const usersCreateRequest = makeAction(USERS_CREATE_REQUEST);
export const usersCreateReceiveSuccess = makeAction(USERS_CREATE_RECEIVE_SUCCESS);
export const usersCreateReceiveError = makeAction(USERS_CREATE_RECEIVE_ERROR);

export const usersReadRequest = makeAction(USERS_READ_REQUEST);
export const usersReadReceiveSuccess = makeAction(USERS_READ_RECEIVE_SUCCESS);
export const usersReadReceiveError = makeAction(USERS_READ_RECEIVE_ERROR);

export const usersUpdateRequest = makeAction(USERS_UPDATE_REQUEST);
export const usersUpdateReceiveSuccess = makeAction(USERS_UPDATE_RECEIVE_SUCCESS);
export const usersUpdateReceiveError = makeAction(USERS_UPDATE_RECEIVE_ERROR);

export const usersDeleteRequest = makeAction(USERS_DELETE_REQUEST);
export const usersDeleteReceiveSuccess = makeAction(USERS_DELETE_RECEIVE_SUCCESS);
export const usersDeleteReceiveError = makeAction(USERS_DELETE_RECEIVE_ERROR);

export const userChoose = makeAction(USER_CHOOSE);

export const userToggleUpdateButtonState = makeAction(USER_TOGGLE_UPDATE_BUTTON_STATE);



export const createUsers = (dispatch) => {
  dispatch(usersCreateRequest());
  api.create()
      .then((response) => response.json())
      .then((json) => {
        dispatch(usersCreateReceiveSuccess(json));
        return json;
      })
      .catch((json) => {
        dispatch(usersCreateReceiveError(json));
        return json;
      })
};

export const readUsers = (dispatch) => {
  dispatch(usersReadRequest());
  api.read()
      .then((response) => response.json())
      .then((json) => {
        dispatch(usersReadReceiveSuccess(json));
        return json;
      })
      .catch((json) => {
        dispatch(usersReadReceiveError(json));
        return json;
      })
};

export const updateUsers = (dispatch, id) => {console.log(id);
  dispatch(usersUpdateRequest(id));
  api.update()
      .then((response) => response.json())
      .then((json) => {
        dispatch(usersUpdateReceiveSuccess(json));
        return json;
      })
      .catch((json) => {
        dispatch(usersUpdateReceiveError(json));
        return json;
      })
};

export const deleteUsers =  (dispatch, id) => {
  dispatch(usersDeleteRequest(id));
  api.delete()
      .then((response) => response.json())
      .then((json) => {
        dispatch(usersDeleteReceiveSuccess(json));
        return json;
      })
      .catch((json) => {
        dispatch(usersDeleteReceiveError(json));
        return json;
      })
};

export const chooseUser = (dispatch, id) => {
    dispatch(userChoose(null, id));
};

