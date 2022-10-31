import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "../context";
const SearchBar = () => {
  const searchValue = useRef("");
  const { setSports, sports, setSearchTerm } = useGlobalContext();

  const searchSports = () => {
    setSearchTerm(searchValue.current.value);
  };

  return (
    <div className="section searchbar-section" id="sports">
      <div className="card card--accent">
        <h2 className="searchbar-title">find your sport...</h2>
        <label className="input">
          <input
            className="field"
            type="text"
            placeholder=" "
            ref={searchValue}
            onChange={searchSports}
          />
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
