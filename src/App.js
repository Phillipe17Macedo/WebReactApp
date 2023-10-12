import React ,{ useState } from 'react';
import './App.css';
import { Head, Navbar, Search, Footer } from './Common';
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
            <Route path="/Video" element={<Video/>} />
            <Route path="/Sobre" element={<Sobre/>} />
          </Routes>
        </Router>
      </div>
    </html>
  );
}

export default App;
