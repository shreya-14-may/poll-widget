import React from 'react';
import PollList from './components/PollList';
import AddPoll from './components/AddPoll';
import NavBar from './components/Navbar';
import './styles/App.css'; 
function App() {
  return (
    <div className="App">
      <NavBar /> {/* Add NavBar at the top */}
      <h1>Poll App</h1>
      <PollList />
      <AddPoll />
    </div>
  );
}

export default App;
