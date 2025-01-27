import React, { useState } from 'react';
import './Search.css';

const SearchAndFilter = ({ data }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filterCategory, setFilterCategory] = useState('all');
  
    const handleSearchChange = (event) => {
      setSearchTerm(event.target.value);
    };
  
    const handleFilterChange = (event) => {
      setFilterCategory(event.target.value);
    };
  
    const filteredData = data
      .filter((item) => {
        if (filterCategory === 'all') {
          return true;
        }
        return item.category === filterCategory;
      })
      .filter((item) => {
        return item.name.toLowerCase().includes(searchTerm.toLowerCase());
      });
  
    return (
      <div className="search-filter-container">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input"
        />
  
        {/* Filter Dropdown */}
        <select
          value={filterCategory}
          onChange={handleFilterChange}
          className="filter-dropdown"
        >
          <option value="all">All</option>
          <option value="category1">Category 1</option>
          <option value="category2">Category 2</option>
          <option value="category3">Category 3</option>
        </select>
  
        {/* Display Filtered Results */}
        <ul className="results-list">
          {filteredData.map((item) => (
            <li key={item.id}>
              <span>{item.name}</span> - {item.category}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default SearchAndFilter;