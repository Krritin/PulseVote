import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import PollList from './pages/PollList';
import PollDetail from './pages/PollDetail';
import CreatePoll from './pages/CreatePoll';
import './App.css';

function App() {
  return (
    <div className="container">
      <nav>
        <Link to="/"><h1>📊 QuickPolls</h1></Link>
        <Link to="/create" className="create-link">Create New Poll</Link>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<PollList />} />
          <Route path="/poll/:id" element={<PollDetail />} />
          <Route path="/create" element={<CreatePoll />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;