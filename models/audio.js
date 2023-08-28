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
  genre: {
    type: String,
    required: true
  },
  gdprCompliant: {
    type: Boolean,
    default: false
  },
  ccpaCompliant: {
    type: Boolean,
    default: false
  }
});

const Audio = mongoose.model('Audio', audioSchema);

module.exports = Audio;