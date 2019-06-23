import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../utilities/utilitiesForTests';
import LetterButton from './LetterButton';

const testProps = {
  value: 'a',
  updateText: () => {}
};

describe('Letter Button component', () => {
  let component;
  beforeEach(() => {
    component = shallow(<LetterButton {...testProps} />);
  });

  it('Should render without errors', () => {
    const button = findByTestAttr(component, 'letterButton');
    expect(button.length).toBe(1);
  });
});
