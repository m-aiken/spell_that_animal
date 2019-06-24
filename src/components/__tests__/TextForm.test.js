import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../utilities/utilitiesForTests';
import TextForm from '../TextForm';

const testProps = {
  success: true,
  text: 'Test text',
  clearText: () => {},
  resetImage: () => {},
  submit: () => {}
};

describe('TextForm component', () => {
  let component;
  beforeEach(() => {
    component = shallow(<TextForm {...testProps} />);
  });

  describe('Message box', () => {
    it('Should render without errors', () => {
      const messageBox = findByTestAttr(component, 'messageBox');
      expect(messageBox.length).toBe(1);
    });
  });

  describe('Text input and clear button container', () => {
    it('Should render without errors', () => {
      const inputAndClear = findByTestAttr(component, 'inputAndClearContainer');
      expect(inputAndClear.length).toBe(1);
    });
  });

  describe('Text input', () => {
    it('Should render without errors', () => {
      const textInput = findByTestAttr(component, 'textInput');
      expect(textInput.length).toBe(1);
    });
  });

  describe('Form buttons container (Go! and Play Again!)', () => {
    it('Should render without errors', () => {
      const formButtons = findByTestAttr(component, 'goPlayContainer');
      expect(formButtons.length).toBe(1);
    });
  });

  describe('Checking PropTypes', () => {
    it('Should not throw a warning', () => {
      const propsError = checkProps(TextForm, testProps);
      expect(propsError).toBeUndefined();
    });
  });
});
