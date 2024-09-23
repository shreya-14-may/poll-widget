import React, { useEffect, useState } from 'react';
// import '../styles/PollView.css'; 

const PollView = ({ poll }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [pollData, setPollData] = useState(poll);


  useEffect(() => {
    // Retrieve updated poll data from local storage
    const polls = JSON.parse(localStorage.getItem('polls')) || [];
    const updatedPoll = polls.find((p) => p.id === poll.id);
    if (updatedPoll) {
      setPollData(updatedPoll);
    }
  }, [poll.id]);

  const totalVotes = pollData.options.reduce((acc, option) => acc + option.votes, 0);

  const handleVote = (optionIndex) => {
    const updatedOptions = pollData.options.map((option, index) => {
      if (index === optionIndex) {
        return { ...option, votes: option.votes + 1 };
      } else if (index === selectedOption) {
        return { ...option, votes: option.votes > 0 ? option.votes - 1 : 0 };
      }
      return option;
    });

    const polls = JSON.parse(localStorage.getItem('polls')) || [];
    const updatedPolls = polls.map((p) => {
      if (p.id === pollData.id) {
        return { ...p, options: updatedOptions };
      }
      return p;
    });

    localStorage.setItem('polls', JSON.stringify(updatedPolls));
    setPollData({ ...pollData, options: updatedOptions });
    setSelectedOption(optionIndex);
};

  // const handleVote = (optionIndex) => {
  //   if (selectedOption === null) { 
  //     setSelectedOption(optionIndex);

  //     const updatedOptions = pollData.options.map((option, index) => {
  //       if (index === optionIndex) {
  //         return { ...option, votes: option.votes + 1 };
  //       }
  //       return option;
  //     });

  //     const polls = JSON.parse(localStorage.getItem('polls')) || [];
  //     const updatedPolls = polls.map((p) => {
  //       if (p.id === pollData.id) {
  //         return { ...p, options: updatedOptions };
  //       }
  //       return p;
  //     });

  //     localStorage.setItem('polls', JSON.stringify(updatedPolls));
  //     setPollData({ ...pollData, options: updatedOptions });
  //   }
  // };

  return (
    <div className="poll-container">
      <h3>{pollData.question}</h3>
      <form>
        {pollData.options.map((option, index) => (
          <div key={index} className="poll-option">
            <input
              type="radio"
              id={`option-${index}`}
              name="poll-option"
              checked={selectedOption === index}
              onChange={() => handleVote(index)}
            />
            <label htmlFor={`option-${index}`}>
              {option.text} - {option.votes} votes
            </label>
            <div className="progress-bar-container">
              <div
                className="progress-bar"
                style={{
                  width: totalVotes > 0 ? `${(option.votes / totalVotes) * 100}%` : '0%',
                  backgroundColor: '#4caf50',
                }}
              />
            </div>
          </div>
        ))}
      </form>
    </div>
  );
};

export default PollView;

