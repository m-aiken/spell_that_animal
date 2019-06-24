import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../utilities/utilitiesForTests';
import PlayAgain from '../PlayAgain';

const testProps = {
  resetImage: () => {}
};

describe('PlayAgain component', () => {
  let component;
  beforeEach(() => {
    component = shallow(<PlayAgain {...testProps} />);
  });

  describe('Container Div', () => {
    it('Should render without errors', () => {
      const containerDiv = findByTestAttr(component, 'playAgainContainer');
      expect(containerDiv.length).toBe(1);
    });
  });

  describe('Play Again button', () => {
    it('Should render without errors', () => {
      const button = findByTestAttr(component, 'playAgainButton');
      expect(button.length).toBe(1);
    });
  });

  describe('Checking PropTypes', () => {
    it('Should not throw a warning', () => {
      const PropsError = checkProps(PlayAgain, testProps);
      expect(PropsError).toBeUndefined();
    });
  });
});
