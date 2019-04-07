import React from 'react';
import { shallow } from 'enzyme';
import { Persone } from '../../../src/features/home/Persone';

describe('home/Persone', () => {
  it('renders node with correct class name', () => {
    const props = {
      home: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Persone {...props} />
    );

    expect(
      renderedComponent.find('.home-persone').length
    ).toBe(1);
  });
});
