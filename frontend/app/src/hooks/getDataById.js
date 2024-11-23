import React, { useState, useEffect, useRef } from "react";
import fetchData from "../utils/fetchData";
import formatTitle from "../utils/formatTitle";
import BuildResultPage from "../containers/buildResultPage";
import LoadingRing from "../containers/loadingRing";

export default function GetDataById({ paramId }) {
  const [resultObj, setResultObj] = useState({});
  let awaitingFetch = useRef(true);
  let fetchSuccess = useRef(false);

  useEffect(() => {
    fetchData(`/searchid/${paramId}`)
      .then((data) => {
        // did we find an es result matching the id in the url param?
        if (data?.myData?.found) {
          const { orig_url, title, url } = data.myData._source;
          const { page } = formatTitle(title, true);
          setResultObj({
            url: url,
            page: page,
            title: formatTitle(title),
            id: paramId,
            orig_url: orig_url,
          });
          awaitingFetch.current = false;
          fetchSuccess.current = true;
        } else {
          awaitingFetch.current = false;
          setResultObj({})
        }
      })
      .catch(() => {
        console.log(`Fetching for id "${paramId}" failed`);
        awaitingFetch.current = false;
        setResultObj({})
      });
  }, [paramId]);

  return (
    <div>
      {awaitingFetch.current ? (
        <div className="App-bg">
            <div className="m-2">Loading Results</div>
            <LoadingRing/>
        </div>
      ) : fetchSuccess.current ? (
        <BuildResultPage resultObj={resultObj} />
      ) : (
        <div className="App-bg">We couldn't find any results matching id: '{paramId}'</div>
      )}
    </div>
  );
}
