import React, { useState, useEffect } from 'react';
import Poll from './Poll'; // Import Poll component

const Polls = () => {
  const [polls, setPolls] = useState([]);

  useEffect(() => {
    const savedPolls = JSON.parse(localStorage.getItem('polls')) || [];
    setPolls(savedPolls);
  }, []);

  useEffect(() => {
    localStorage.setItem('polls', JSON.stringify(polls));
  }, [polls]);

  const handleVote = (pollId, optionIndex) => {
    const updatedPolls = polls.map((poll) =>
      poll.id === pollId
        ? {
            ...poll,
            options: poll.options.map((option, index) =>
              index === optionIndex
                ? { ...option, votes: option.votes + 1 }
                : option
            ),
          }
        : poll
    );
    setPolls(updatedPolls);
  };

  const handleAddPoll = () => {
    const newPoll = {
      id: polls.length + 1,
      question: `Poll Question ${polls.length + 1}`,
      options: [
        { text: 'Option 1', votes: 0 },
        { text: 'Option 2', votes: 0 },
      ],
    };
    setPolls([...polls, newPoll]);
  };

  return (
    <div>
      <button onClick={handleAddPoll}>Add New Poll</button>
      {polls.map((poll) => {
        const totalVotes = poll.options.reduce((total, option) => total + option.votes, 0);

        return (
          <div key={poll.id}>
            <Poll poll={poll} onVote={(optionIndex) => handleVote(poll.id, optionIndex)} />
            <h4>Vote Percentages:</h4>
            <ul className="poll-options">
              {poll.options.map((option, index) => {
                const percentage = totalVotes > 0 ? (option.votes / totalVotes) * 100 : 0;

                return (
                  <li key={index}>
                    {option.text} - {option.votes} votes
                    <div className="progress-bar">
                      <div className={styles['progress']} style={{ width: `${percentage}%` }}></div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Polls;
