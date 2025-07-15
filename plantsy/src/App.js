import React, { useEffect, useState } from 'react';
import AddPlant from './addplant';
import './App.css';
import Header from './header';
import PlantCard from './plantcard';
import PlantList from './plantlist';
import Search from './search';

function App() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001/plants')
      .then(res => res.json())
      .then(data => setPlants(data))
      .catch(err => console.error('Fetch error:', err));
  }, []);

  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <Header />
      <AddPlant setPlants={setPlants} />
      <Search onSearch={(e) => setSearchTerm(e.target.value)} />
      <PlantList plants={filteredPlants} setPlants={setPlants} />
    </div>
  );
}

export default App;
