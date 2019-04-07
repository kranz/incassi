import {
  HOME_PERSON_MINUS_ONE,
} from '../../../../src/features/home/redux/constants';

import {
  personMinusOne,
  reducer,
} from '../../../../src/features/home/redux/personMinusOne';

describe('home/redux/personMinusOne', () => {
  it('returns correct action by personMinusOne', () => {
    expect(personMinusOne()).toHaveProperty('type', HOME_PERSON_MINUS_ONE);
  });

  it('handles action type HOME_PERSON_MINUS_ONE correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: HOME_PERSON_MINUS_ONE }
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {};
    expect(state).toEqual(expectedState);
  });
});
