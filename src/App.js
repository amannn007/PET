import React, { useState, useEffect } from 'react';
import PetList from './components/PetList';
import PetForm from './components/PetForm';
import './styles/App.css';

const App = () => {
  const [pets, setPets] = useState([]);
  const [filteredPets, setFilteredPets] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await fetch('http://pets-v2.dev-apis.com/pets');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPets(data.pets);
        setFilteredPets(data.pets);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPets();
  }, []);

  useEffect(() => {
    const results = pets.filter((pet) =>
      pet.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredPets(results);
  }, [searchQuery, pets]);

  const addPet = (pet) => {
    const updatedPets = [...pets, pet];
    setPets(updatedPets);
    setFilteredPets(updatedPets.filter((p) =>
      p.name.toLowerCase().includes(searchQuery.toLowerCase())
    ));
  };

  return (
    <div className="app">
      <h1>Pet Listing</h1>
      <input
        className="search-input"
        type="text"
        placeholder="Search pets..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <PetForm addPet={addPet} />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {!loading && !error && <PetList pets={filteredPets} />}
    </div>
  );
};

export default App;
