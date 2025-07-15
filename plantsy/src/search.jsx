import React from 'react';

function Search({ onSearch }) {
  return (
    <div id="search-container">
      <h2>Search Plants</h2>
      <input
        type="text"
        placeholder="Type a name to search"
        onChange={onSearch}
      />
    </div>
  );
}

export default Search;
