import pollReducer, { vote, addPoll } from './pollSlice';

test('should handle voting', () => {
  const initialState = [
    {
      id: '1',
      question: 'How do you feel today?',
      options: [
        { text: 'Brilliant!', votes: 0 },
        { text: 'Not great', votes: 0 }
      ]
    }
  ];

  const state = pollReducer(initialState, vote({ pollId: '1', optionIndex: 0 }));
  expect(state[0].options[0].votes).toBe(1);
});

test('should handle adding a new poll', () => {
  const initialState = [];
  const newPoll = {
    id: '2',
    question: 'Your feedback?',
    options: [{ text: 'Good', votes: 0 }, { text: 'Bad', votes: 0 }]
  };

  const state = pollReducer(initialState, addPoll(newPoll));
  expect(state.length).toBe(1);
  expect(state[0].id).toBe('2');
});
