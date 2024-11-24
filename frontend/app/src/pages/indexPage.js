import GetData from "../hooks/getData.js";

function IndexPage() {
  return (
    <>
      <div className="App-bg d-flex justify-content-start ">
        <div className="title-font">
          <p className="display-1 mt-5">Stat Abstracts Digital</p>
          <p className="display-4 font-italic">Accessiblizing The Abstract</p>
        </div>
        <div className="text-center">
          <GetData />
        </div>
      </div>
    </>
  );
}

export default IndexPage;
