import React from "react";
import firstXWords from "../utils/firstXWords";
import formatTitle from "../utils/formatTitle";
import relatedSentences from "../utils/relatedSentences";

export default function SearchResult({ search, result, submission }) {
    console.log(submission?.current)
  if (!submission?.current) {
    return;
  }
  const value = result?.myData?.hits?.total?.value;
  const hits = result?.myData?.hits?.hits;
  //   console.log(result, search, value);
  if (value !== undefined) {
    if (value > 0) {
      return (
        <div className="d-flex flex-column bg-secondary rounded mt-2 container-max-md">
          {hits.map((hit, i) => (
            <a key={i} href={`/search?id=${hit?._id}`}>
              <div className="flex-row m-3 p-4 rounded bg-dark text-white text-left">
                <div className="h4 pt-1">{formatTitle(hit._source.title)}</div>
                <div className="text-bold pt-1">
                  Page Title:
                  <div className="text-small">
                  {firstXWords(hit._source.contents, 15)}...
                  </div>
                </div>
                <div className="py-1 text-bold">
                  Related Content:
                  <div className="text-small">
                    {relatedSentences(hit._source.contents, search, 3)}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      );
    }
    if (value === 0) {
      return (
        <div className="d-flex flex-column bg-danger rounded mt-2 ">
          <div className="flex-row m-3 p-2 rounded bg-dark text-white">
            No Restuls Found.
          </div>
        </div>
      );
    }
  }
}
