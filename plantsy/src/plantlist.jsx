import React from 'react';
import PlantCard from './plantcard';

function PlantList({ plants, setPlants }) {
  const handleDelete = (id) => {
    setPlants(prev => prev.filter(plant => plant.id !== id));
  };

  return (
    <div className="plant-list" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', padding: '20px' }}>
      {plants.map((plant) => (
        <PlantCard key={plant.id} plant={plant} onDelete={handleDelete} />
      ))}
    </div>
  );
}

export default PlantList;
