import mongoose from 'mongoose';
const { Schema } = mongoose;

const OptionSchema = new Schema({
  text: {
    type: String,
    required: true
  },
  votes: {
    type: Number,
    default: 0
  },
});

const PollSchema = new Schema({
  question: {
    type: String,
    required: true
  },
  options: [OptionSchema],
  createdAt: {
    type: Date,
    default: Date.now
  },
});

const Poll = mongoose.model('Poll', PollSchema);
export default Poll;