import React, { useEffect, useState } from 'react';
import '../styles/PollView.css'; // Make sure to import your CSS file

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
    if (selectedOption === null) { 
      setSelectedOption(optionIndex);

      const updatedOptions = pollData.options.map((option, index) => {
        if (index === optionIndex) {
          return { ...option, votes: option.votes + 1 };
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
    }
  };

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



// import React from 'react';

// const PollView = ({ poll }) => {
//   const totalVotes = poll.options.reduce((acc, option) => acc + option.votes, 0);

//   const handleVote = (optionIndex) => {
//     // Update the votes locally
//     const updatedOptions = poll.options.map((option, index) => {
//       if (index === optionIndex) {
//         return { ...option, votes: option.votes + 1 };
//       }
//       return option;
//     });

//     // Update the poll in local storage
//     const polls = JSON.parse(localStorage.getItem('polls')) || [];
//     const updatedPolls = polls.map((p) => {
//       if (p.id === poll.id) {
//         return { ...p, options: updatedOptions };
//       }
//       return p;
//     });

//     localStorage.setItem('polls', JSON.stringify(updatedPolls));
//     // Re-render or update the state as needed
//   };

//   return (
//     <div>
//       <h3>{poll.question}</h3>
//       <form>
//         {poll.options.map((option, index) => (
//           <div key={index}>
//             <input
//               type="radio"
//               id={`option-${index}`}
//               name="poll-option"
//               onChange={() => handleVote(index)}
//             />
//             <label htmlFor={`option-${index}`}>
//               {option.text} - {option.votes} votes
//             </label>
//             <div style={{ width: '100%', backgroundColor: '#f3f3f3', borderRadius: '5px' }}>
//               <div
//                 style={{
//                   width: totalVotes > 0 ? `${(option.votes / totalVotes) * 100}%` : '0%',
//                   backgroundColor: '#4caf50',
//                   height: '10px',
//                   borderRadius: '5px'
//                 }}
//               />
//             </div>
//           </div>
//         ))}
//       </form>
//     </div>
//   );
// };

// export default PollView;
