import React from 'react';
import PropTypes from 'prop-types';

const PlayAgain = props => {
  return (
    <div className="submit-play-button">
      <button className="btn btn-success m-1" onClick={props.resetImage}>
        Play Again!
      </button>
    </div>
  );
};

PlayAgain.propTypes = {
  resetImage: PropTypes.func.isRequired
};

export default PlayAgain;
