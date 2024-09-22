// import React from 'react';
// import { useSelector } from 'react-redux';
// import PollView from './PollView';
// import PollResult from './PollResult';
// import '../styles/Poll.css'; 

// const PollList = () => {
//   const polls = useSelector((state) => state.polls);

//   return (
//     <div>
//       {polls.map((poll) => (
//         <div className="poll" key={poll.id}>
//           <PollView poll={poll} />
//           <PollResult poll={poll} />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default PollList;


import React, { useEffect, useState } from 'react';
import PollView from './PollView';

const PollList = () => {
  const [polls, setPolls] = useState([]);

  useEffect(() => {
    const storedPolls = JSON.parse(localStorage.getItem('polls')) || [];
    setPolls(storedPolls);
  }, []);

  return (
    <div>
      <h2>Poll List</h2>
      {polls.map((poll) => (
        <PollView key={poll.id} poll={poll} />
      ))}
    </div>
  );
};

export default PollList;
