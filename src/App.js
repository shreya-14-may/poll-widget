import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar'; // Adjust the import path
import AddPoll from './components/AddPoll'; // Import AddPoll
import PollList from './components/PollList'; // Import your Home component (if you have one)

const App = () => {
  return (
      <div className="App">
    <Router>
      <NavBar />
      <Routes>
        <Route path="/add-poll" element={<AddPoll />} />
        <Route path="/" element={<PollList />} /> {/* Home component for the root path */}
        {/* Add other routes here */}
      </Routes>
    </Router>
    </div>
  );
};

export default App;
