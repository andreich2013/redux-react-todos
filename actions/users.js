const makeAction = (actionName) => {
  return (...rest) => {
    return {
      type: actionName,
      ...rest
    }
  }
}

export const USERS_CREATE = 'USERS_CREATE';
export const USERS_READ = 'USERS_READ';
export const USERS_UPDATE = 'USERS_UPDATE';
export const USERS_DELETE = 'USERS_DELETE';

export const createUsers = (...rest) => makeAction(USERS_CREATE);
export const readUsers = (...rest) => makeAction(USERS_READ);
export const updateUsers = (...rest) => makeAction(USERS_UPDATE);
export const deleteUsers = (...rest) => makeAction(USERS_DELETE);
