import React, { useState } from 'react';
import './App.css';

function Header({ groupBy, setGroupBy, sortOption, setSortOption, loadData }) {
  const [optionsVisible, setOptionsVisible] = useState(false);

  const handleGroupByChange = (e) => {
    setGroupBy(e.target.value);
  };

  const handleSortOptionChange = (e) => {
    setSortOption(e.target.value);
  };

  const handleDisplayClick = () => {
    setOptionsVisible(true);
    loadData();
  };

  return (
    <div className="header">
      <button onClick={handleDisplayClick} className="dis-button">
        Display 
      </button>
      {optionsVisible && (
        <>
      <div style={{display:"flex",justifyContent:"left", flexDirection:"column"}}>   <div >
            <label>Group By: </label>
            <select value={groupBy} onChange={handleGroupByChange} className='dis-buttons'>
              <option value="status">Status</option>
              <option value="userId">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>
          <div>
            <label>Sort By: </label>
            <select className='dis-buttons' value={sortOption} onChange={handleSortOptionChange}>
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
          </div> 
        </>
      )}
    </div>
  );
}

export default Header;