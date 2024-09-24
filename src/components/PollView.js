import React, { useEffect, useState } from "react";

const PollView = ({ poll }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [pollData, setPollData] = useState(poll);

  useEffect(() => {
    const polls = JSON.parse(localStorage.getItem("polls")) || [];
    const updatedPoll = polls.find((p) => p.id === poll.id);
    if (updatedPoll) {
      setPollData(updatedPoll);
    }
  }, [poll.id]);

  const totalVotes = pollData.options.reduce(
    (acc, option) => acc + option.votes,
    0
  );

  const handleVote = (optionIndex) => {
    const updatedOptions = pollData.options.map((option, index) => {
      if (index === optionIndex) {
        return { ...option, votes: option.votes + 1 };
      } else if (index === selectedOption) {
        return { ...option, votes: option.votes > 0 ? option.votes - 1 : 0 };
      }
      return option;
    });

    const polls = JSON.parse(localStorage.getItem("polls")) || [];
    const updatedPolls = polls.map((p) => {
      if (p.id === pollData.id) {
        return { ...p, options: updatedOptions };
      }
      return p;
    });

    localStorage.setItem("polls", JSON.stringify(updatedPolls));
    setPollData({ ...pollData, options: updatedOptions });
    setSelectedOption(optionIndex);
  };

  return (
    <div className="card mb-1 mt-3 w-100">
      <div className="card-body">
        <h3 className="card-title">{pollData.question}</h3>
        <form>
          {pollData.options.map((option, index) => (
            <div key={`${pollData.id}-option-${index}`} className="poll-option">
              <div className="form-check d-flex align-items-center">
                <input
                  type="radio"
                  className="form-check-input me-2"
                  id={`poll-${pollData.id}-option-${index}`}
                  name={`poll-${pollData.id}-options`}
                  checked={selectedOption === index}
                  onChange={() => handleVote(index)}
                />
                <label
                  htmlFor={`poll-${pollData.id}-option-${index}`}
                  className="form-check-label"
                >
                  {option.text} - {option.votes} votes
                </label>
              </div>
              <div className="progress">
                <div
                  className={`progress-bar ${
                    selectedOption === index ? "bg-success" : "bg-secondary"
                  }`}
                  style={{
                    width:
                      totalVotes > 0
                        ? `${(option.votes / totalVotes) * 100}%`
                        : "0%",
                  }}
                />
              </div>
            </div>
          ))}
        </form>
      </div>
    </div>
  );
};

export default PollView;
