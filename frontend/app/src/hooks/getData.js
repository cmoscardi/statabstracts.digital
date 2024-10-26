import React, { useState, useEffect } from "react";

function GetData() {
  // usestate for setting a javascript
  // object for storing and using data
  const [data, setdata] = useState({ myData: "Results Appear Here" });

  const [searchInput, setSearchInput] = useState("Search Here!");
  const handleOnChange = ({ target }) => {
    setSearchInput(target.value);
  };

  const fetchData = (e) => {
    e.preventDefault();
    try {
      fetch(`/searchdata/${searchInput}`).then((res) => {
        res.json().then((data) => {
          // Setting a data from api
          setdata({myData: JSON.stringify(data)});
        }).catch(error => { console.log("json decode failed"); console.log(error); });
      }).catch(error => { console.log("fetch failed"); console.log(error); });
;
    } catch (error) {
      console.log("v bad");
      console.log(error);
    }
    return false;
  };
  const handleSubmit = (e) => {fetchData(e)}

  return (
    <div className="mt-5">
      <header>
        <h1>Data From Flask:</h1>
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleOnChange}
            value={searchInput}
          ></input>
          <button type="submit">Search</button>
        </form>
        <p>{data.myData}</p>
      </header>
    </div>
  );
}

export default GetData;
