import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addPoll } from '../redux/pollSlice';

const CreatePoll = () => {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['', '']);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const addOptionField = () => {
    setOptions([...options, '']);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const filteredOptions = options.filter(opt => opt.trim() !== '');
    if (question.trim() && filteredOptions.length >= 2) {
      dispatch(addPoll({ question, options: filteredOptions }));
      navigate('/');
    } else {
      alert('Please provide a question and at least two non-empty options.');
    }
  };

  return (
    <div className="create-poll">
      <h2>Create a New Poll</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="question">Poll Question</label>
          <input
            type="text"
            id="question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Options</label>
          {options.map((option, index) => (
            <input
              key={index}
              type="text"
              value={option}
              onChange={(e) => handleOptionChange(index, e.target.value)}
              placeholder={`Option ${index + 1}`}
            />
          ))}
          <button type="button" onClick={addOptionField} className="btn-secondary">
            + Add Option
          </button>
        </div>
        <button type="submit" className="btn-primary">Create Poll</button>
      </form>
    </div>
  );
};

export default CreatePoll;