// Rekit uses a new approach to organizing actions and reducers. That is
// putting related actions and reducers in one file. See more at:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da

import {
  HOME_PERSON_MINUS_ONE,
} from './constants';

export function personMinusOne() {
  return {
    type: HOME_PERSON_MINUS_ONE,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case HOME_PERSON_MINUS_ONE:
      return {
        ...state,
        count: state.count - 1,
      };

    default:
      return state;
  }
}
