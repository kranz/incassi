import {
  HOME_PERSON_RESET,
} from '../../../../src/features/home/redux/constants';

import {
  personReset,
  reducer,
} from '../../../../src/features/home/redux/personReset';

describe('home/redux/personReset', () => {
  it('returns correct action by personReset', () => {
    expect(personReset()).toHaveProperty('type', HOME_PERSON_RESET);
  });

  it('handles action type HOME_PERSON_RESET correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: HOME_PERSON_RESET }
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {};
    expect(state).toEqual(expectedState);
  });
});
