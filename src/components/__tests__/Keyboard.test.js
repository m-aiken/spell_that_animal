import React from 'react';
import { checkProps } from '../../utilities/utilitiesForTests';
import Keyboard from '../Keyboard';

describe('Keyboard component', () => {
  describe('Checking PropTypes', () => {
    it('Should not throw a warning', () => {
      const expectedProps = { updateText: () => {} };
      const propsError = checkProps(Keyboard, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });
});
