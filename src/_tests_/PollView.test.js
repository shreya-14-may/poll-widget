// src/_tests_/PollView.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PollView from '../components/PollView';

describe('PollView Voting', () => {
  const mockPoll = {
    id: '1',
    question: 'What is your favorite color?',
    options: [
      { text: 'Red', votes: 0 },
      { text: 'Blue', votes: 0 },
    ],
  };

  test('displays initial vote counts', () => {
    render(<PollView poll={mockPoll} />);

    // Checking initial vote counts
    expect(screen.getByText(/red - 0 votes/i)).toBeInTheDocument();
    expect(screen.getByText(/blue - 0 votes/i)).toBeInTheDocument();
  });

  test('selects an option and updates votes', () => {
    render(<PollView poll={mockPoll} />);

    // Selecting the first option
    const firstOption = screen.getByLabelText(/red/i);
    fireEvent.click(firstOption);

    // Checking if the vote count for 'Red' is updated
    expect(screen.getByText(/red - 1 votes/i)).toBeInTheDocument();
    expect(screen.getByText(/blue - 0 votes/i)).toBeInTheDocument();

    // Selecting the second option
    const secondOption = screen.getByLabelText(/blue/i);
    fireEvent.click(secondOption);

    // Checking if the vote count for 'Blue' is updated and 'Red' is decremented
    expect(screen.getByText(/red - 0 votes/i)).toBeInTheDocument();
    expect(screen.getByText(/blue - 1 votes/i)).toBeInTheDocument();
  });
});
