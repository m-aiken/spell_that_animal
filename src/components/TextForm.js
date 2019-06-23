import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import SubmitButton from './SubmitButton';
import ClearText from './ClearText';
import PlayAgain from './PlayAgain';
import { correct, incorrect } from '../messages';

let successStatus;

const TextForm = props => {
  switch (props.success) {
    case null:
      successStatus = 'Try to spell the Animal!';
      break;
    case true:
      const randomCorrect = Math.floor(Math.random() * 10);
      successStatus = correct[randomCorrect];
      break;
    case false:
      const randomIncorrect = Math.floor(Math.random() * 6);
      successStatus = incorrect[randomIncorrect];
      break;
  }

  return (
    <Fragment>
      <div className="message">{successStatus}</div>
      <div className="text-box-and-clear-button">
        <div className="text-box">{props.text}</div>
        <ClearText clearText={props.clearText} />
      </div>
      <div className="form-buttons">
        <SubmitButton submit={props.submit} />
        <PlayAgain resetImage={props.resetImage} />
      </div>
    </Fragment>
  );
};

TextForm.propTypes = {
  success: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  clearText: PropTypes.func.isRequired,
  resetImage: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired
};

export default TextForm;