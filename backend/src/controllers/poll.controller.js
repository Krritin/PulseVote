import Poll from "../models/poll.model.js";

export const getAllPolls = async (req, res) => {
  try {
    const polls = await Poll.find().sort({ createdAt: -1 });
    res.status(200).json(polls);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching polls', error });
  }
};

export const createPoll = async (req, res) => {
  const { question, options } = req.body;

  if (!question || !options || options.length < 2) {
    return res.status(400).json({ message: 'Question and at least two options are required.' });
  }

  try {
    const formattedOptions = options.map(text => ({ text, votes: 0 }));
    const newPoll = new Poll({
      question,
      options: formattedOptions,
    });

    const savedPoll = await newPoll.save();
    res.status(201).json(savedPoll);
  } catch (error) {
    res.status(500).json({ message: 'Error creating poll', error });
  }
};

// @route   POST /api/polls/:id/vote
export const voteOnPoll = async (req, res) => {
  try {
    const { id } = req.params;
    const { optionIndex } = req.body;

    const poll = await Poll.findById(id);

    if (!poll) {
      return res.status(404).json({ message: 'Poll not found' });
    }

    if (optionIndex === undefined || poll.options[optionIndex] === undefined) {
      return res.status(400).json({ message: 'Invalid option index' });
    }

    poll.options[optionIndex].votes += 1;
    const updatedPoll = await poll.save();

    res.status(200).json(updatedPoll);
  } catch (error) {
    res.status(500).json({ message: 'Error voting on poll', error });
  }
};