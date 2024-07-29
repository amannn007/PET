import React from 'react';
import PropTypes from 'prop-types';
import '../styles/PetCard.css';

const PetCard = ({ pet }) => (
  <div className="pet-card">
    <img src={pet.images[0]} alt={pet.name} />
    <h3>{pet.name}</h3>
    <p>{pet.description}</p>
  </div>
);

PetCard.propTypes = {
  pet: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default PetCard;
