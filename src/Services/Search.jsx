import React, { useState, useContext } from "react";
import { GlobalContextApi } from "./../ContextApi/GlobalContext";

const Search = () => {
  let [search, setSearch] = useState("");
  let { searchResult } = useContext(GlobalContextApi);
  let handleSubmit = e => {
    e.preventDefault();
    searchResult(search);
  };

  return (
    <div id="search">
      <form onSubmit={handleSubmit}>
        <div className="search-page">
          <input
            type="search"
            placeholder="Search for users"
            value={search}
            onChange={e => {
              setSearch(e.target.value);
            }}
          />
          <button>Search</button>
        </div>
      </form>
    </div>
  );
};

export default Search;
