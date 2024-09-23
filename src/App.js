// src/App.js

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './components/Nav'; 
import AppRoutes from './AppRoutes'; // Import your routes

const App = () => {
  return (
    <div className="App">
      <Router>
        <Nav />
        <AppRoutes /> {/* Use the routes component here */}
      </Router>
    </div>
  );
};

export default App;
