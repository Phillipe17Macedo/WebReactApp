import React  from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Video from './Video';
import Sobre from './Sobre';


function App() {
  return (
    <html>
      <div>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/Video" element={<Video/>} />
            <Route exact path="/Sobre" element={<Sobre/>} />
          </Routes>
        </Router>
      </div>
    </html>
  );
}

export default App;
