import React from 'react';
import PropTypes from 'prop-types';

const AnimalImage = props => {
  return (
    <div className="image">
      <img src={props.image} alt="" />
    </div>
  );
};

AnimalImage.propTypes = {
  image: PropTypes.string.isRequired
};

export default AnimalImage;
