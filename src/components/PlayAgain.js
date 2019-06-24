import React from 'react';
import PropTypes from 'prop-types';

const PlayAgain = props => {
  return (
    <div className="submit-play-button" data-test="playAgainContainer">
      <button
        className="btn btn-success m-1"
        onClick={props.resetImage}
        data-test="playAgainButton"
      >
        Play Again!
      </button>
    </div>
  );
};

PlayAgain.propTypes = {
  resetImage: PropTypes.func.isRequired
};

export default PlayAgain;
