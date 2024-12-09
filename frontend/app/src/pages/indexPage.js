import GetData from "../hooks/getData.js";

function IndexPage() {
  return (
    <>
      <div className="App-bg d-flex justify-content-start ">
        <div className="title-font">
          <p className="display-2 mt-5">Stat Abstracts Digital</p>
          <p className="fw-bold font-italic">Accessiblizing The Abstract</p>
        </div>
        <div className="text-center w-100 px-3">
          <GetData />
        </div>
      </div>
    </>
  );
}

export default IndexPage;
