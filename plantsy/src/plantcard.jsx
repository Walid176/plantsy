import React, { useState } from 'react';

function PlantCard({ plant, onDelete }) {
  const { id, image, name, price } = plant;
  const [inStock, setInStock] = useState(true);

  const toggleStock = () => setInStock(prev => !prev);

  const handleDelete = () => {
    fetch(`http://localhost:3001/plants/${id}`, {
      method: 'DELETE',
    })
      .then((res) => {
        if (res.ok) {
          onDelete(id);
        } else {
          console.error('Failed to delete');
        }
      });
  };

  return (
    <div className="plant-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{price}</p>
      <button onClick={toggleStock}>
        {inStock ? 'In Stock' : 'Out of Stock'}
      </button>
      <br />
      <button onClick={handleDelete} style={{ marginTop: '10px', backgroundColor: 'crimson' }}>
        Delete
      </button>
    </div>
  );
}

export default PlantCard;
