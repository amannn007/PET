import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/PetForm.css';

const PetForm = ({ addPet }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPet = {
      id: Date.now(),
      name,
      description,
      images: [image],
    };
    addPet(newPet);
    setName('');
    setDescription('');
    setImage('');
  };

  return (
    <form className="pet-form" onSubmit={handleSubmit}>
      <input
        className="form-input"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        className="form-input"
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        className="form-input"
        type="url"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        required
      />
      <button className="form-button" type="submit">Add Pet</button>
    </form>
  );
};

PetForm.propTypes = {
  addPet: PropTypes.func.isRequired,
};

export default PetForm;
