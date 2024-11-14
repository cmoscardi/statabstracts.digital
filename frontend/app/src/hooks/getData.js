import React, { useState, useEffect, useRef } from "react";
import SearchResult from "../containers/searchResult";
import getUrlParam from "../utils/getUrlParam";
import updateUrlParam from "../utils/updateUrlParam";
import fetchData from "../utils/fetchData";

function GetData() {
  const searchParam = getUrlParam("search");

  let submission = useRef(false);

  // usestate for setting a javascript
  // object for storing and using data
  const [data, setData] = useState({ myData: "Results Appear Here" });

  const [searchInput, setSearchInput] = useState(
    searchParam ? searchParam : ""
  );
  const handleOnChange = ({ target }) => {
    setSearchInput(target.value);
  };

  const handleSubmit = (e) => {
    submission.current = true;
    e.preventDefault();
    fetchData(`/searchdata/${searchInput}`).then((res) => {
      setData({ myData: res })
    }
    );

    updateUrlParam("search", searchInput);
  };

  useEffect(() => {
    submission.current = false;
  }, [data]);

  return (
    <div className="mt-5">
      <header>
        <h1>Explore Census Data</h1>
        <form onSubmit={handleSubmit}>
          <input onChange={handleOnChange} value={searchInput}></input>
          <button type="submit">Search</button>
        </form>
        <SearchResult
          search={searchInput}
          result={data.myData}
          submission={submission}
        />
      </header>
    </div>
  );
}

export default GetData;
