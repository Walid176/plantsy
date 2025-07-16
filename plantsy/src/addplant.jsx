import React, { useState } from 'react';

function AddPlant({ setPlants }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  function handleClick() {
    if (name === "" || image === "" || price === "") {
      alert("Please fill out all fields");
      return;
    }

    const newPlant = {
      name: name,
      image: image,
      price: price
    };

    fetch("http://localhost:3001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPlant)
    })
      .then(res => res.json())
      .then(data => {
        setPlants((prevPlants) => [...prevPlants, data]);
        setName("");
        setImage("");
        setPrice("");
      })
      .catch(error => {
        console.log("Error adding plant:", error);
      });
  }

  return (
    <div id="add-form">
      <h2>New Plant</h2>
      <form id="plant-form" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Plant Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <input type="button" value="Add Plant" onClick={handleClick} />
      </form>
    </div>
  );
}

export default AddPlant;
