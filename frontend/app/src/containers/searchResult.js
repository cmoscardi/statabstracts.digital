import React from "react";
import BuildSearchLink from "../hooks/buildSearchLink";

export default function SearchResult({ search, result }) {
  const value = result?.myData?.hits?.total?.value;
  const hits = result?.myData?.hits?.hits;
  // console.log('result, search, hits',result, search, value);
  if (value !== undefined) {
    if (value > 0) {
      return (
        <div className="d-flex flex-column bg-secondary rounded mt-2 container-max-lg mx-auto">
          {hits.map((hit, i) => (
            <BuildSearchLink key={i} hit={hit} search={search} />
          ))}
        </div>
      );
    }
    if (value === 0) {
      return (
        <div className="d-flex flex-column bg-danger rounded mt-2 container-max-md mx-auto">
          <div className="flex-row m-3 p-4 rounded bg-dark text-white">
            No Results Found.
          </div>
        </div>
      );
    }
  }
}
