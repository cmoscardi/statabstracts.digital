import GetData from '../hooks/getData.js';

function IndexPage() {
  return (
    <div>
      <body className="App-bg d-flex justify-content-start">
        <p className="display-1 mt-5">Stat Abstracts Digital</p>
        <p className="display-4 font-italic">
          Accessiblizing The Abstract
        </p>
        <div className='text-center'>
          <GetData />
        </div>
      </body>
    </div>
  );
}

export default IndexPage;