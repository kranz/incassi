import {
  HOME_PERSON_PLUS_ONE,
} from '../../../../src/features/home/redux/constants';

import {
  personPlusOne,
  reducer,
} from '../../../../src/features/home/redux/personPlusOne';

describe('home/redux/personPlusOne', () => {
  it('returns correct action by personPlusOne', () => {
    expect(personPlusOne()).toHaveProperty('type', HOME_PERSON_PLUS_ONE);
  });

  it('handles action type HOME_PERSON_PLUS_ONE correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: HOME_PERSON_PLUS_ONE }
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {};
    expect(state).toEqual(expectedState);
  });
});
