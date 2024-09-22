// src/components/Poll.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { vote } from '../redux/pollSlice';

const PollView = ({ poll }) => {
  const dispatch = useDispatch();

  const handleVote = (optionIndex) => {
    dispatch(vote({ pollId: poll.id, optionIndex }));
  };

  return (
    <div>
      <h3>{poll.question}</h3>
      <ul className="poll-options">
        {poll.options.map((option, index) => (
          <li key={index}>
            {option.text} - {option.votes} votes
            <button onClick={() => handleVote(index)}>Vote</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PollView;
