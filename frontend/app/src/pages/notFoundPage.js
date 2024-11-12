import eggdog from "../assets/eggdog.png";
function NotFoundPage() {
  return (
    <div>
      <body className="App-bg d-flex w-100 justify-content-start pt-5 px-5">
        <div className="w-100 display-3 text-center">
          Oh my... it appears this page doesn't exist. That's quite sad. Here's
          eggdog to cheer you up!
        </div>
        <div className="row">
        <div className="m-3 spin-content-fast col">
            <img src={eggdog} alt="Eggdog" />
          </div>
          <div className="m-3 spin-content col">
            <img src={eggdog} alt="Eggdog" />
          </div>
          <div className="m-3 spin-content-fast col">
            <img src={eggdog} alt="Eggdog" />
          </div>
        </div>
        <div>
          For more information on Eggdog, please{" "}
          <a href="https://www.youtube.com/watch?v=Vi7ULYt2ha0" target="blank">click here</a>.
        </div>
      </body>
    </div>
  );
}

export default NotFoundPage;
