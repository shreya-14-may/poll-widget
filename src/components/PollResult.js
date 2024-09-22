import React from 'react';

const PollResult = ({ poll }) => {
  const totalVotes = poll.options.reduce((sum, option) => sum + option.votes, 0);

  return (
    <div>
      <h3>Results for: {poll.question}</h3>
      {poll.options.map((option, index) => {
        const percentage = totalVotes > 0 ? (option.votes / totalVotes) * 100 : 0;
        return (
          <div key={index} className="poll-result">
            <p>{option.text} - {option.votes} votes</p>
            <div className="progress-bar">
              <div
                className="progress"
                style={{ width: `${percentage}%`, backgroundColor: 'blue' }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PollResult;
