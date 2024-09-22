const initialState = {
  polls: {}
};

const pollReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_POLL': {
      const { pollId, question, options } = action.payload;
      return {
        ...state,
        polls: {
          ...state.polls,
          [pollId]: {
            question,
            options,
            votes: Array(options.length).fill(0)
          }
        }
      };
    }
    case 'VOTE': {
      const { pollId, answerIndex } = action.payload;
      const poll = state.polls[pollId];
      const newVotes = [...poll.votes];
      newVotes[answerIndex] += 1;
      return {
        ...state,
        polls: {
          ...state.polls,
          [pollId]: {
            ...poll,
            votes: newVotes
          }
        }
      };
    }
    default:
      return state;
  }
};

export default pollReducer;
