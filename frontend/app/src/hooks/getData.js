import React, { useState, useEffect, useRef } from "react";
import SearchResult from "../containers/searchResult";
import getUrlParam from "../utils/getUrlParam";
import updateUrlParam from "../utils/updateUrlParam";

function GetData() {
  const searchParam = getUrlParam("search");

  let submission = useRef(false);

  // usestate for setting a javascript
  // object for storing and using data
  const [data, setdata] = useState({ myData: "Results Appear Here" });

  const [searchInput, setSearchInput] = useState(
    searchParam ? searchParam : ""
  );
  const handleOnChange = ({ target }) => {
    setSearchInput(target.value);
  };

  const fetchData = (e) => {
    e.preventDefault();
    console.log('called fetch')
    try {
      fetch(`/searchdata/${searchInput}`)
        .then((res) => {
          res.json().then((data) => {
            // Setting a data from api
            setdata({ myData: data });
            console.log(data)
          });
        })
        .catch((error) => {
          console.log("fetch failed");
          console.log(error);
        });
    } catch (error) {
      console.log("v bad");
      console.log(error);
    }
    return false;
  };

  const handleSubmit = (e) => {
    submission.current = true;
    fetchData(e);
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
