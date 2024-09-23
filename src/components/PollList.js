import React, { useEffect, useState } from 'react';
import PollView from './PollView';
import pollsData from '../polls.json';
// import '../styles/Poll.css'; 

const PollList = () => {
  const [polls, setPolls] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pollsPerPage = 3;

  // useEffect(() => {
  //   const storedPolls = JSON.parse(localStorage.getItem('polls')) || [];
  //   setPolls(storedPolls);
  // }, []); without polls from  json file
  useEffect(() => {
    const storedPolls = JSON.parse(localStorage.getItem('polls'));
    if (!storedPolls || storedPolls.length === 0) {
      // If no polls in localStorage, load from JSON
      localStorage.setItem('polls', JSON.stringify(pollsData));
      setPolls(pollsData);
    } else {
      setPolls(storedPolls);
    }
  }, []);

  const indexOfLastPoll = currentPage * pollsPerPage;
  const indexOfFirstPoll = indexOfLastPoll - pollsPerPage;
  const currentPolls = polls.slice(indexOfFirstPoll, indexOfLastPoll);

  const handleNextPage = () => {
    if (indexOfLastPoll < polls.length) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const handlePrevPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };

  return (
    <div>
      <h2>Poll List</h2>
      {currentPolls.map((poll) => (
        <PollView key={poll.id} poll={poll} />
      ))}
      <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>Previous</button>
        <button onClick={handleNextPage} disabled={indexOfLastPoll >= polls.length}>Next</button>
      </div>
    </div>
  );
};

export default PollList;

