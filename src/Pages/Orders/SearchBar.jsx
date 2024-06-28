import React from 'react';
import './SearchBar.css'


function SearchBar() {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search your orders here" />
      <button className='B1'>Search Orders</button>
    </div>
  );
}

export default SearchBar;
