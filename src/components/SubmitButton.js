import React from 'react';
import PropTypes from 'prop-types';

const SubmitButton = props => {
  return (
    <button
      className="submit-button"
      onClick={props.submit}
      data-test="submitButton"
    >
      GO!
    </button>
  );
};

SubmitButton.propTypes = {
  submit: PropTypes.func.isRequired
};

export default SubmitButton;
