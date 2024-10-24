import logo from './logo.svg';
import './App.css';
import Navbar from './containers/navbar.js'
import GetData from './hooks/getData.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <p className="display-1">Stat Abstract Digital</p>
        <p className="display-4 font-italic">
          Accessiblizing The Abstract
        </p>
        <div>
          <GetData />
        </div>
      </header>
    </div>
  );
}

export default App;
