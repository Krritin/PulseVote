import express from 'express';
import {
    getAllPolls,
    createPoll,
    voteOnPoll
} from '../controllers/poll.controller.js';

const router = express.router();

router.get('/', getAllPolls);
router.post('/', createPoll);
router.post('/:id/vote', voteOnPoll);

export default router;