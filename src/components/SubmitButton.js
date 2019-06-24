import React from 'react';
import PropTypes from 'prop-types';

const SubmitButton = props => {
  return (
    <div className="submit-play-button" data-test="submitContainer">
      <button
        className="btn btn-primary m-1"
        onClick={props.submit}
        data-test="submitButton"
      >
        GO!
      </button>
    </div>
  );
};

SubmitButton.propTypes = {
  submit: PropTypes.func.isRequired
};

export default SubmitButton;
