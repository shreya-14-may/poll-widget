import React from 'react';
import { useSelector } from 'react-redux';
import PollView from './PollView';
import '../styles/Poll.css'; 

const PollList = () => {
  const polls = useSelector((state) => state.polls);

  return (
    <div>
      {polls.map((poll) => (
        <div className="poll" key={poll.id}>
          <PollView poll={poll} />
        </div>
      ))}
    </div>
  );
};

export default PollList;
