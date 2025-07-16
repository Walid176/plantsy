import React, { useState, useEffect } from 'react';
import AddPlant from './addplant';
import Header from './header';
import PlantList from './plantlist';
import Search from './search';
import './App.css';

function App() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch("http://localhost:3001/plants")
      .then((response) => response.json())
      .then((data) => {
        setPlants(data);
      })
      .catch((error) => {
        console.log("Error fetching plants:", error);
      });
  }, []);

  function handleSearch(event) {
    setSearchTerm(event.target.value);
  }

  const filtered = plants.filter((plant) => {
    return plant.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="App">
      <Header />
      <AddPlant setPlants={setPlants} />
      <Search onSearch={handleSearch} />
      <PlantList plants={filtered} setPlants={setPlants} />
    </div>
  );
}

export default App;
