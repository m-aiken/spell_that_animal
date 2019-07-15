import React from 'react';
import PropTypes from 'prop-types';

const PlayAgain = props => {
  return (
    <button
      className="play-again-button"
      onClick={props.resetImage}
      data-test="playAgainButton"
    >
      Play Again!
    </button>
  );
};

PlayAgain.propTypes = {
  resetImage: PropTypes.func.isRequired
};

export default PlayAgain;
