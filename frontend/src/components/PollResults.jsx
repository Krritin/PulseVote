import React from 'react';

const PollResults = ({ poll }) => {
  const totalVotes = poll.options.reduce((sum, option) => sum + option.votes, 0);

  return (
    <div className="poll-results">
      <h3>Live Results:</h3>
      {poll.options.map((option, index) => {
        const percentage = totalVotes > 0 ? ((option.votes / totalVotes) * 100).toFixed(1) : 0;
        return (
          <div key={index} className="result-bar-container">
            <div className="result-info">
              <span>{option.text} ({option.votes} votes)</span>
              <span>{percentage}%</span>
            </div>
            <div className="result-bar">
              <div
                className="result-bar-fill"
                style={{ width: `${percentage}%` }}
              ></div>
            </div>
          </div>
        );
      })}
      <p className="total-votes">Total Votes: {totalVotes}</p>
    </div>
  );
};

export default PollResults;