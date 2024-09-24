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
    const existingPolls = JSON.parse(localStorage.getItem('polls')) || [];
    localStorage.setItem('polls', JSON.stringify([...existingPolls, newPoll]));
    setQuestion('');
    setOptions(['', '']);
  };


  return (
    <div className="container card  shadow-lg mt-5 w-75 h-100 mh-100 mw-100">
      <h2 className="mb-4">Add Poll</h2>
      <div className="mb-3">
        <label className="d-flex form-label">Question:</label>
        <input
          type="text"
          placeholder="Write your Question Here"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="form-control"
        />
      </div>
      {options.map((option, index) => (
        <div className="mb-3" key={index}>
          <input
            type="text"
            placeholder={`Option ${index + 1}`}
            value={option}
            onChange={(e) => handleOptionChange(index, e.target.value)}
            className="form-control"
          />
        </div>
      ))}
      <button onClick={handleAddOption} className="btn btn-secondary mr-2">
        Add Option
      </button>
      <button onClick={handleSubmit} className="btn btn-primary mt-1">
        Create Poll
      </button>
    </div>
  );
  // return (
  //   <div className="container mt-5">
  //     <h2 className="mb-4">Add Poll</h2>
  //       <input
  //         type="text"
  //         placeholder="Question"
  //         value={question}
  //         onChange={(e) => setQuestion(e.target.value)}
  //       />
  //     {options.map((option, index) => (
  //       <input
  //         key={index}
  //         type="text"
  //         placeholder={`Option ${index + 1}`}
  //         value={option}
  //         onChange={(e) => handleOptionChange(index, e.target.value)}
  //       />
  //     ))}
  //     <button onClick={handleAddOption}>Add Option</button>
  //     <button onClick={handleSubmit}>Create Poll</button>
  //   </div>
  // );
};

export default AddPoll;
