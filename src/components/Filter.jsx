import React from 'react';
import './Filter.css';

function Filter() {
  return (
    <div className="filter-container">
      <h2>Filter</h2>
      <div className="filter-inputs">
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Mobile" />
        <select>
          <option value="">Select Group</option>
        </select>
        <button className="filter-button"> 
          <i className="fas fa-search"></i> Filter
        </button>
        <button className="clear-button">Clear</button>
      </div>
    </div>
  );
}

export default Filter;