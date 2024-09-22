import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const AddPoll = () => {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['', '']);

  const handleAddOption = () => {
    setOptions([...options, '']);
  };

  const handleOptionChange = (index, value) => {
    const newOptions = options.slice();
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleSubmit = () => {
    const newPoll = {
      id: uuidv4(),
      question,
      options: options.map((text) => ({ text, votes: 0 }))
    };

    // Save to local storage
    const existingPolls = JSON.parse(localStorage.getItem('polls')) || [];
    localStorage.setItem('polls', JSON.stringify([...existingPolls, newPoll]));

    // Reset form fields
    setQuestion('');
    setOptions(['', '']);
  };

  return (
    <div>
      <h2>Add Poll</h2>
      <input
        type="text"
        placeholder="Question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      {options.map((option, index) => (
        <input
          key={index}
          type="text"
          placeholder={`Option ${index + 1}`}
          value={option}
          onChange={(e) => handleOptionChange(index, e.target.value)}
        />
      ))}
      <button onClick={handleAddOption}>Add Option</button>
      <button onClick={handleSubmit}>Create Poll</button>
    </div>
  );
};

export default AddPoll;
