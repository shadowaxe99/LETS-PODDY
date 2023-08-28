const mongoose = require('mongoose');

const audioSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  artist: {
    type: String,
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
  fileUrl: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Audio = mongoose.model('Audio', audioSchema);

module.exports = Audio;