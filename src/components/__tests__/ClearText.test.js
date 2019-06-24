import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../utilities/utilitiesForTests';
import ClearText from '../ClearText';

const testProps = {
  clearText: () => {}
};

describe('Clear Text component', () => {
  let component;
  beforeEach(() => {
    component = shallow(<ClearText {...testProps} />);
  });

  it('Should render without errors', () => {
    const button = findByTestAttr(component, 'clearTextButton');
    expect(button.length).toBe(1);
  });

  describe('Checking PropTypes', () => {
    it('Should not throw a warning', () => {
      const propsError = checkProps(ClearText, testProps);
      expect(propsError).toBeUndefined();
    });
  });
});
