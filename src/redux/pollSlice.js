// src/redux/pollSlice.js
import { createSlice } from '@reduxjs/toolkit';

const pollSlice = createSlice({
  name: 'polls',
  initialState: {
    polls: JSON.parse(localStorage.getItem('polls')) || []
  },
  reducers: {
    vote: (state, action) => {
      const { pollId, optionIndex } = action.payload;
      const poll = state.polls.find(p => p.id === pollId);
      if (poll) {
        poll.options[optionIndex].votes += 1;
        localStorage.setItem('polls', JSON.stringify(state.polls)); // Update localStorage
      }
    },
    addPoll: (state, action) => {
      state.polls.push(action.payload);
      localStorage.setItem('polls', JSON.stringify(state.polls)); // Update localStorage
    }
  }
});

export const { vote, addPoll } = pollSlice.actions;
export default pollSlice.reducer;



// import { createSlice } from '@reduxjs/toolkit';
// import pollData from '../polls.json';
// const initialState = JSON.parse(localStorage.getItem('polls')) || pollData;
// const pollSlice = createSlice({
//   name: 'polls',
//   initialState: pollData,
//   reducers: {
//     vote: (state, action) => {
//       const { pollId, optionIndex } = action.payload;
//       const poll = state.find((p) => p.id === pollId);
//       if (poll) {
//         poll.options[optionIndex].votes += 1;
//         try {
//             localStorage.setItem('polls', JSON.stringify(state));
//             console.log("LocalStorage after saving: ", localStorage.getItem('polls'));

//           } catch (error) {
//             console.error("Local Storage Error: ", error);
//           }
//       }
//     },
//     addPoll: (state, action) => {
//       state.push(action.payload);
//       localStorage.setItem('polls', JSON.stringify(state));
//     }
//   }
// });

// export const { vote, addPoll } = pollSlice.actions;
// export default pollSlice.reducer;
