import { useLocation } from "react-router-dom";
import BuildPdf from "../hooks/buildPdf";

function ResultPage() {
  const location = useLocation();
  const { orig_url, title } = location.state;
  return (
    <>
      <div className="App-bg">
        <div className="d-flex h-95vh  w-100 px-5 flex-column">
          <div className="flex-row pb-2">
            <h1>{title}</h1>
            <div className="d-flex justify-content-center ws-pre-wrap">
              <div>Original Document: </div> <a href={orig_url} target="_blank" rel="noreferrer">Click Here</a>
            </div>
          </div>
          <div className="row w-100 h-100">
            <div className="col d-flex justify-content-center border">
              <div className="row-container">
                <BuildPdf />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResultPage;
