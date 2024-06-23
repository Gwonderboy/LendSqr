import React from "react";
import {  Search } from "../assets";

const SearchBar: React.FC = () => {
  return (
    <div className="search_wrapper">
      <input placeholder="Search" type="text" className="search" />
      <button className="search_btn">
        <img src={Search} alt="" />
      </button>
    </div>
  );
};

export default SearchBar;
