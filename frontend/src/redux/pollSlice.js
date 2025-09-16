import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk to fetch all polls
export const fetchPolls = createAsyncThunk('polls/fetchPolls', async () => {
  const response = await axios.get('/api/polls');
  return response.data;
});

// Async thunk to add a new poll
export const addPoll = createAsyncThunk('polls/addPoll', async (pollData) => {
  const response = await axios.post('/api/polls', pollData);
  return response.data;
});

// Async thunk to add a vote
export const addVote = createAsyncThunk('polls/addVote', async ({ pollId, optionIndex }) => {
  const response = await axios.post(`/api/polls/${pollId}/vote`, { optionIndex });
  return response.data;
});

const pollSlice = createSlice({
  name: 'polls',
  initialState: {
    items: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPolls.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPolls.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchPolls.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addPoll.fulfilled, (state, action) => {
        state.items.unshift(action.payload); // Add new poll to the beginning
      })
      .addCase(addVote.fulfilled, (state, action) => {
        const updatedPoll = action.payload;
        const existingPollIndex = state.items.findIndex((poll) => poll._id === updatedPoll._id);
        if (existingPollIndex !== -1) {
          state.items[existingPollIndex] = updatedPoll;
        }
      });
  },
});

export default pollSlice.reducer;