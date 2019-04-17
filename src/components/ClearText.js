import React from 'react';
import PropTypes from 'prop-types';

const ClearText = props => {
  return (
    <button className="btn btn-warning m-1" onClick={props.clearText}>
      Clear
    </button>
  );
};

ClearText.propTypes = {
  clearText: PropTypes.func.isRequired
};

export default ClearText;
