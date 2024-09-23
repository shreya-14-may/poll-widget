import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav'; 
import AddPoll from './components/AddPoll'; 
import PollList from './components/PollList'; 
const App = () => {
  return (
      <div className="App">
    <Router>
      <Nav />
      <Routes>
        <Route path="/add-poll" element={<AddPoll />} />
        <Route path="/" element={<PollList />} />
      </Routes>
    </Router>
    </div>
  );
};

export default App;
