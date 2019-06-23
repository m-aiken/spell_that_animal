import React from 'react';
import PropTypes from 'prop-types';

const LetterButton = props => {
  const { value, updateText } = props;
  return (
    <button
      data-test="letterButton"
      className="btn btn-danger m-1 letter-buttons"
      value={value}
      onClick={updateText}
    >
      {value}
    </button>
  );
};

LetterButton.propTypes = {
  value: PropTypes.string.isRequired,
  updateText: PropTypes.func.isRequired
};

export default LetterButton;
