const AudioController = require('../models/audioModel');

// Get all audio files
exports.getAllAudio = async (req, res) => {
  try {
    const audioFiles = await AudioController.find();
    res.status(200).json(audioFiles);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get a single audio file by ID
exports.getAudioById = async (req, res) => {
  try {
    const audioFile = await AudioController.findById(req.params.id);
    if (!audioFile) {
      return res.status(404).json({ error: 'Audio file not found' });
    }
    res.status(200).json(audioFile);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Create a new audio file
exports.createAudio = async (req, res) => {
  try {
    const { title, artist, duration } = req.body;
    const newAudio = new AudioController({
      title,
      artist,
      duration,
    });
    const savedAudio = await newAudio.save();
    res.status(201).json(savedAudio);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Update an existing audio file
exports.updateAudio = async (req, res) => {
  try {
    const { title, artist, duration } = req.body;
    const updatedAudio = await AudioController.findByIdAndUpdate(
      req.params.id,
      {
        title,
        artist,
        duration,
      },
      { new: true }
    );
    if (!updatedAudio) {
      return res.status(404).json({ error: 'Audio file not found' });
    }
    res.status(200).json(updatedAudio);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Delete an audio file
exports.deleteAudio = async (req, res) => {
  try {
    const deletedAudio = await AudioController.findByIdAndDelete(req.params.id);
    if (!deletedAudio) {
      return res.status(404).json({ error: 'Audio file not found' });
    }
    res.status(200).json({ message: 'Audio file deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};