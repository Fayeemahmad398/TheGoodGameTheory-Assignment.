import React from "react";

import { FaSearch } from "react-icons/fa";
function Navbar({ setSearch, searchTerm }) {
  return (
    <div className="navbar">
      <div>
        <FaSearch className="search-icon" />
        <input
          type="search"
          name="navbar"
          id=""
          value={searchTerm}
          onChange={(e) => {
            setSearch(e.target.value.trim());
          }}
          placeholder="Search by name or tagline"
        />
      </div>
    </div>
  );
}

export default Navbar;
