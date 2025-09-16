import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import pollRoutes from './routes/poll.routes.js';
import connectDB from './config/db.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middlewares
app.use(cors({
    origin: 'http://localhost:5173', // Allow frontend's origin
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
}));
app.use(express.json());

// API Routes
app.use('/api/polls', pollRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
    connectDB();
});