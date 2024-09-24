// src/App.js

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './components/Nav'; 
import AppRoutes from './AppRoutes'; // Import your routes

const App = () => {
  return (
    <div className=" App d-flex flex-column justify-content-start align-items-center text-center" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/image.png)` }}>
      <Router>
        <Nav />
        <AppRoutes /> 
      </Router>
    </div>
  );
};

export default App;
