import { useParams } from "react-router-dom";

function ResultPage() {
  const {pdfRef} = useParams()
  return (
    <div>
      <body className="App-bg d-flex w-100 justify-content-start pt-5 px-5">
        <div className="row  w-100 h-100">
          <div className="col-sm-4 d-flex justify-content-center border">
            PDF Reference: {pdfRef}
          </div>
          <div className="col-sm-8 d-flex justify-content-center border">
            PDF Results
            <div className="w-100 h-100">
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default ResultPage;
