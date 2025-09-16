import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addVote, fetchPolls } from '../redux/pollSlice';
import PollResults from '../components/PollResults';

const PollDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  
  // Fetch polls if they aren't loaded yet
  const pollStatus = useSelector((state) => state.polls.status);
  useEffect(() => {
    if (pollStatus === 'idle') {
      dispatch(fetchPolls());
    }
  }, [pollStatus, dispatch]);

  const poll = useSelector((state) =>
    state.polls.items.find((p) => p._id === id)
  );

  const handleVote = (optionIndex) => {
    dispatch(addVote({ pollId: id, optionIndex }));
  };

  if (!poll) {
    return <div>Loading poll details...</div>;
  }

  return (
    <div className="poll-detail">
      <h2>{poll.question}</h2>
      <div className="poll-container">
        <div className="vote-options">
          <h3>Vote Here:</h3>
          {poll.options.map((option, index) => (
            <button key={index} onClick={() => handleVote(index)} className="btn-vote">
              {option.text}
            </button>
          ))}
        </div>
        <PollResults poll={poll} />
      </div>
    </div>
  );
};

export default PollDetail;