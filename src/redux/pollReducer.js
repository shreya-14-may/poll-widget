import pollReducer from './reducers';
import { VOTE, ADD_POLL } from './actions';

describe('pollReducer', () => {
  it('should handle VOTE action', () => {
    const initialState = {
      polls: {
        1: {
          question: 'How do you feel today?',
          options: ['Good', 'Bad'],
          votes: [0, 0]
        }
      }
    };

    const action = {
      type: VOTE,
      payload: {
        pollId: 1,
        answer: 1
      }
    };

    const newState = pollReducer(initialState, action);
    expect(newState.polls[1].votes).toEqual([0, 1]);
  });

  it('should handle ADD_POLL action', () => {
    const initialState = {
      polls: {}
    };

    const action = {
      type: ADD_POLL,
      payload: {
        newPoll: {
          question: 'New Poll',
          options: ['Option 1', 'Option 2']
        }
      }
    };

    const newState = pollReducer(initialState, action);
    expect(Object.keys(newState.polls).length).toBe(1);
    expect(newState.polls[1].question).toBe('New Poll');
  });
});
