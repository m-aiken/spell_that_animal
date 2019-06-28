import React from 'react';
import PropTypes from 'prop-types';

const AnimalImage = props => {
  return (
    <div className="image" data-test="animalImageComponent">
      <img src={props.image} alt="Animal" data-test="animalImage" />
    </div>
  );
};

AnimalImage.propTypes = {
  image: PropTypes.string.isRequired
};

export default AnimalImage;
