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

