export const addPoll = (pollId, question, options) => ({
  type: 'ADD_POLL',
  payload: { pollId, question, options }
});

export const vote = (pollId, answerIndex) => ({
  type: 'VOTE',
  payload: { pollId, answerIndex }
});
