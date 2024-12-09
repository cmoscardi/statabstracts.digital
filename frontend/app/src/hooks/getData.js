import React, { useState, useEffect, useRef } from "react";
import SearchResult from "../containers/searchResult";
import getUrlParam from "../utils/getUrlParam";
import updateUrlParam from "../utils/updateUrlParam";
import fetchData from "../utils/fetchData";
import { useLocation, useSearchParams } from "react-router-dom";

function GetData() {
  const [searchParams, setSearchParams] = useSearchParams();
  let searchParam = searchParams.get("search");
  console.log("searchParam:", searchParam);

  // usestate for setting a javascript
  // object for storing and using data
  const [data, setData] = useState({ myData: "Results Appear Here" });

  const [searchInput, setSearchInput] = useState(searchParam || "");
  const handleOnChange = ({ target }) => {
    setSearchInput(target.value);
  };

  const [enteredValue, setEnteredValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnteredValue(searchInput);
    fetchData(`/searchdata/${searchInput}`).then((res) => {
      setData({ myData: res });
    });
    console.log("called handle submit");
    setSearchParams((prev) => {
      console.log("prev.get", prev.get("search"));
      prev.set("search", searchInput);
      return prev;
    });
  };

  useEffect(() => {
    if (searchParam) {
      setEnteredValue(searchParam);
      setSearchInput(searchParam);
      fetchData(`/searchdata/${searchParam}`).then((res) => {
        setData({ myData: res });
      });
    }
    else {
      setEnteredValue('');
      setSearchInput('');
      setData({})
    }
  }, [searchParam]);

  return (
    <div className="mt-5">
      <header>
        <h1>Explore Census Data</h1>
        <form onSubmit={handleSubmit} className="d-flex justify-content-center">
          <input
            onChange={handleOnChange}
            value={searchInput}
            className="w-75 container-max-sm"
          ></input>
          <button type="submit" className="btn btn-light fw-bold p-3">Search</button>
        </form>
        <SearchResult search={enteredValue} result={data.myData} />
      </header>
    </div>
  );
}

export default GetData;
