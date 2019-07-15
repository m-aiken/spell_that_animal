import React from 'react';
import PropTypes from 'prop-types';

const AnimalImage = props => {
  const { image, title, currentlySelected } = props;
  return (
    <div
      className={`image ${currentlySelected === title ? 'show' : 'hide'}`}
      data-test="animalImageComponent"
    >
      <img src={image} id={title} alt="Animal" data-test="animalImage" />
    </div>
  );
};

AnimalImage.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  currentlySelected: PropTypes.string.isRequired
};

export default AnimalImage;
