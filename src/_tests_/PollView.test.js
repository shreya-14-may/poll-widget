import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PollView from '../components/PollView'; // Adjust the path as necessary

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
    render(<PollView poll={mockPoll} />); // Render the PollView component with mock data

    // Check initial vote counts
    expect(screen.getByText(/red - 0 votes/i)).toBeInTheDocument();
    expect(screen.getByText(/blue - 0 votes/i)).toBeInTheDocument();
  });

  test('selects an option and updates votes', () => {
    render(<PollView poll={mockPoll} />); // Render the PollView component with mock data

    // Select the first option
    const firstOption = screen.getByLabelText(/red/i);
    fireEvent.click(firstOption);

    // Check if the vote count is updated
    expect(screen.getByText(/red - 1 votes/i)).toBeInTheDocument();
    expect(screen.getByText(/blue - 0 votes/i)).toBeInTheDocument();

    // Select the second option
    const secondOption = screen.getByLabelText(/blue/i);
    fireEvent.click(secondOption);

    // Check if the vote count is updated
    expect(screen.getByText(/red - 0 votes/i)).toBeInTheDocument();
    expect(screen.getByText(/blue - 1 votes/i)).toBeInTheDocument();
  });
});
