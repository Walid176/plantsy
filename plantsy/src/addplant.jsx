import React, { useState } from 'react';

function AddPlant({ setPlants }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');

  const handleAdd = () => {
    if (!name || !image || !price) return;

    const newPlant = {
      name,
      image,
      price
    };

    fetch('http://localhost:3001/plants', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newPlant)
    })
      .then(res => res.json())
      .then((data) => {
        setPlants(prev => [...prev, data]);
        setName('');
        setImage('');
        setPrice('');
      })
      .catch(err => console.error('Add failed:', err));
  };

  return (
    <div id='add-form'>
      <h2>New Plant</h2>
      <form id='plant-form' onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder='Plant Name' value={name} onChange={e => setName(e.target.value)} required />
        <input type="text" placeholder='Image URL' value={image} onChange={e => setImage(e.target.value)} required />
        <input type="text" placeholder='Price' value={price} onChange={e => setPrice(e.target.value)} required />
        <input type="button" value="Add Plant" onClick={handleAdd} />
      </form>
    </div>
  );
}

export default AddPlant;
