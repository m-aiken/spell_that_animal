import React from 'react';
import PropTypes from 'prop-types';
import LetterButton from './LetterButton';
import { alphabet } from '../alphabet';

const Keyboard = props => {
  return alphabet.map(letter => {
    return (
      <LetterButton key={letter} value={letter} updateText={props.updateText} />
    );
  });
};

Keyboard.propTypes = {
  updateText: PropTypes.func.isRequired
};

export default Keyboard;
