import { createAction } from '../../scn.common/helpers/utils';

import {
  USER_CHOOSE, USER_TOGGLE_UPDATE_BUTTON_STATE
} from './types';

export const userChoose = createAction(USER_CHOOSE);

export const userToggleUpdateButtonState = createAction(USER_TOGGLE_UPDATE_BUTTON_STATE);

export const chooseUser = (dispatch, id) => {
  dispatch(userChoose(null, id));
};
