// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './home'; // Import home.js
import Stats from './stat-reference'; // Import stat-reference.js

function App() {
  return (
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />  {/* Home page route */}
        <Route path="/stat-reference" element={<Stats />} /> {/* Stats page route */}
      </Routes>
    </Router>
  );
}

export default App;
