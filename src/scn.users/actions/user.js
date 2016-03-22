import { createAction } from '../../scn.common/helpers/utils';

import {
  USER_CHOOSE, USER_TOGGLE_UPDATE_BUTTON_STATE
} from './types';

export const chooseUser = createAction(USER_CHOOSE);

export const userToggleUpdateButtonState = createAction(USER_TOGGLE_UPDATE_BUTTON_STATE);
