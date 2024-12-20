import React, { useState, useEffect, useRef } from "react";
import CheckUrlStatus from "../utils/checkUrlStatus";
import BuildResultPage from "../containers/buildResultPage";
import LoadingRing from "../containers/loadingRing";

export default function BuildPdfByPath({ formattedPdfRef, possibleUrl }) {
  const [resultObj, setResultObj] = useState({});
  let awaitingFetch = useRef(true);
  let iframeStatus = useRef(false);

  useEffect(() => {
    CheckUrlStatus(possibleUrl).then((res) => {
      setResultObj({
        orig_url: "",
        title: formattedPdfRef.title,
        url: `https://sad.nyc3.digitaloceanspaces.com/${formattedPdfRef.path}.pdf`,
        page: formattedPdfRef.page,
        id: "NaN",
      });
      iframeStatus.current = res;
      console.log('***res',res)
      awaitingFetch.current = false;
    });
  }, [formattedPdfRef,possibleUrl]);

  return (
    <div>
      {awaitingFetch.current ? (
        <div className="App-bg">
          <div className="m-2">Loading Results For {formattedPdfRef.path}.pdf</div>
          <LoadingRing />
        </div>
      ) : iframeStatus.current === 0 ? (
        <BuildResultPage resultObj={resultObj} />
      ) : (
        <div className="App-bg">
          We couldn't find any results matching {formattedPdfRef.path}.pdf
          <div>Try searching on <a href='/'> our homepage </a> instead!</div>
        </div>
      )}
    </div>
  );
}
