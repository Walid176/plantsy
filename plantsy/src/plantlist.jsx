import React from 'react';
import PlantCard from './plantcard';

function PlantList({ plants, setPlants }) {
  function handleDelete(plantId) {
    const updatedPlants = plants.filter(function (plant) {
      return plant.id !== plantId;
    });
    setPlants(updatedPlants);
  }

  return (
    <div
      className="plant-list"
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        padding: "20px"
      }}
    >
      {plants.map(function (plant) {
        return (
          <PlantCard
            key={plant.id}
            plant={plant}
            onDelete={handleDelete}
          />
        );
      })}
    </div>
  );
}

export default PlantList;
