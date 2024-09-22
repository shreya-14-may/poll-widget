import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  polls: JSON.parse(localStorage.getItem('polls')) || [], // Load from localStorage
};

const pollViewSlice = createSlice({
  name: 'polls',
  initialState,
  reducers: {
    vote: (state, action) => {
      const { pollId, optionIndex } = action.payload;
      const poll = state.polls.find((poll) => poll.id === pollId);
      if (poll) {
        poll.options[optionIndex].votes += 1; // Increment the vote count
        localStorage.setItem('polls', JSON.stringify(state.polls));
      }
    },
  },
});

export const { vote } = pollViewSlice.actions;
export default pollViewSlice.reducer;
