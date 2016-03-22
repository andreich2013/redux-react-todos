export const nodesToArray = (nodeList) => Array.prototype.slice.call(nodeList);
export const updateState = (state, data) => Object.assign({}, state, data || {});
export const createAction = (type) => (...rest) => {
    return {
      type,
      payload: rest
    };
};