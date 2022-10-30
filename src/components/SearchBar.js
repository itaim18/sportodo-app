import React from "react";

const SearchBar = () => {
  return (
    <div className="section searchbar-section" id="searchbar">
      <div className="card card--accent">
        <h2 className="searchbar-title">find your sport...</h2>
        <label className="input">
          <input className="field" type="text" placeholder=" " />
          <span className="input label">e.g: soccer</span>
        </label>
        <div className="button-group">
          <button className="btn search-btn">Search</button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
