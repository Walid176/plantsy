import React, { useState } from 'react';

function PlantCard({ plant, onDelete }) {
  const [inStock, setInStock] = useState(true);

  function handleToggleStock() {
    setInStock(!inStock);
  }

  function handleDeleteClick() {
    fetch("http://localhost:3001/plants/" + plant.id, {
      method: "DELETE"
    })
      .then(function (res) {
        if (res.ok) {
          onDelete(plant.id);
        } else {
          console.log("Delete failed");
        }
      })
      .catch(function (err) {
        console.log("Network error:", err);
      });
  }

  return (
    <div className="plant-card">
      <img src={plant.image} alt={plant.name} />
      <h3>{plant.name}</h3>
      <p>{plant.price}</p>
      <button onClick={handleToggleStock}>
        {inStock ? "In Stock" : "Out of Stock"}
      </button>
      <br />
      <button
        onClick={handleDeleteClick}
        style={{ marginTop: "10px", backgroundColor: "crimson" }}
      >
        Delete
      </button>
    </div>
  );
}

export default PlantCard;
