import logo from './logo.svg';
import './App.css';
import Navbar from './containers/navbar.js'
import GetData from './hooks/getData.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <body className="App-header d-flex justify-content-start">
        <p className="display-1 mt-5">Stat Abstract Digital</p>
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

export default App;
