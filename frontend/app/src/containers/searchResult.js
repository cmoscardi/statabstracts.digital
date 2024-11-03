import React from "react";
import firstXWords from "../utils/firstXWords";
import formatTitle from "../utils/formatTitle";

export default function SearchResult({ search, result }) {
  const value = result?.myData?.hits?.total?.value
  const hits = result?.myData?.hits?.hits;
//   console.log(result, search, value);
  const path = `/search?${search}`;
  if (value !== undefined) {
    if (value > 0) {
        return (
          <a href={path}>
            <div className="d-flex flex-column bg-primary rounded mt-2 ">
              {hits.map((hit, i) => (
                <div
                  className="flex-row m-3 p-2 rounded bg-dark text-white"
                  key={i}
                >
                  <div className="h2 p-2">{formatTitle(hit._source.title)}</div>
                  <div className="h5 p-2">
                    {firstXWords(hit._source.contents, 15)}...
                  </div>
                </div>
              ))}
            </div>
          </a>
        );
    }
    if (value === 0) {
        return (
            <div className="d-flex flex-column bg-primary rounded mt-2 ">
                <div className="flex-row m-3 p-2 rounded bg-dark text-white">No Restuls Found.</div>
            </div>
        ) 
    }
  }
}
