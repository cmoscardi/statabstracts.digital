import './App.css';
import Navbar from './containers/navbar.js'
import GetData from './hooks/getData.js';
import {Route, Routes} from 'react-router-dom'
import IndexPage from './pages/indexPage.js';
import ResultPage from './pages/resultPage.js';
import NotFoundPage from './pages/notFoundPage.js';
import AboutPage from './pages/aboutPage.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<IndexPage/>}></Route>
        <Route path='/result/:pdfRef' element={<ResultPage/>}></Route>
        <Route path='/about' element={<AboutPage/>}></Route>
        <Route path='*' element={<NotFoundPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
