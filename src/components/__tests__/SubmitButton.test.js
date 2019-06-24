import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../utilities/utilitiesForTests';
import SubmitButton from '../SubmitButton';

const testProps = {
  submit: () => {}
};

describe('SubmitButton component', () => {
  let component;
  beforeEach(() => {
    component = shallow(<SubmitButton {...testProps} />);
  });

  describe('Container Div', () => {
    it('Should render without errors', () => {
      const containerDiv = findByTestAttr(component, 'submitContainer');
      expect(containerDiv.length).toBe(1);
    });
  });

  describe('Submit button', () => {
    it('Should render without errors', () => {
      const button = findByTestAttr(component, 'submitButton');
      expect(button.length).toBe(1);
    });
  });

  describe('Checking PropTypes', () => {
    it('Should not throw a warning', () => {
      const propsError = checkProps(SubmitButton, testProps);
      expect(propsError).toBeUndefined();
    });
  });
});
