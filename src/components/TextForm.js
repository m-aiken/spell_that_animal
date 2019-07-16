import React from 'react';
import PropTypes from 'prop-types';
import SubmitButton from './SubmitButton';
import PlayAgain from './PlayAgain';
import { correct, incorrect } from '../utilities/messages';

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
    <div className="text-box-container" data-test="textBoxContainer">
      <div className="message" data-test="messageBox">
        {successStatus}
      </div>
      <div className="text-box" data-test="textInput">
        {props.text}
      </div>
      <div className="form-buttons" data-test="goPlayContainer">
        <SubmitButton submit={props.submit} />
        <PlayAgain resetImage={props.resetImage} />
      </div>
    </div>
  );
};

TextForm.propTypes = {
  success: PropTypes.bool,
  text: PropTypes.string.isRequired,
  resetImage: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired
};

export default TextForm;
