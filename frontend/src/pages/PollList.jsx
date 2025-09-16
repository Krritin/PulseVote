import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPolls } from '../redux/pollSlice';

const PollList = () => {
  const dispatch = useDispatch();
  const polls = useSelector((state) => state.polls.items);
  const pollStatus = useSelector((state) => state.polls.status);

  useEffect(() => {
    if (pollStatus === 'idle') {
      dispatch(fetchPolls());
    }
  }, [pollStatus, dispatch]);

  if (pollStatus === 'loading') return <p>Loading polls...</p>;

  return (
    <div className="poll-list">
      <h2>All Polls</h2>
      {polls.length === 0 && <p>No polls found. Why not create one?</p>}
      <ul>
        {polls.map((poll) => (
          <li key={poll._id}>
            <Link to={`/poll/${poll._id}`}>{poll.question}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PollList;