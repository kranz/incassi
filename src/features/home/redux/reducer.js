import initialState from './initialState';
import { reducer as personPlusOneReducer } from './personPlusOne';
import { reducer as personMinusOneReducer } from './personMinusOne';
import { reducer as personResetReducer } from './personReset';

const reducers = [
  personPlusOneReducer,
  personMinusOneReducer,
  personResetReducer,
];

export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    // Handle cross-topic actions here
    default:
      newState = state;
      break;
  }
  /* istanbul ignore next */
  return reducers.reduce((s, r) => r(s, action), newState);
}
