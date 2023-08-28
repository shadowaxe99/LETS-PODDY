const Audio = require('../models/audio');
const { validateAudio } = require('../utils/gdprUtils');

// Get all audios
exports.getAllAudios = async (req, res) => {
  try {
    const audios = await Audio.find();
    res.status(200).json(audios);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get audio by ID
exports.getAudioById = async (req, res) => {
  try {
    const audio = await Audio.findById(req.params.id);
    if (!audio) {
      return res.status(404).json({ error: 'Audio not found' });
    }
    res.status(200).json(audio);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Create a new audio
exports.createAudio = async (req, res) => {
  try {
    const { title, artist, duration } = req.body;

    // Validate audio data
    const { error } = validateAudio(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const audio = new Audio({
      title,
      artist,
      duration,
    });

    await audio.save();
    res.status(201).json(audio);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Update audio by ID
exports.updateAudio = async (req, res) => {
  try {
    const { title, artist, duration } = req.body;

    // Validate audio data
    const { error } = validateAudio(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const audio = await Audio.findByIdAndUpdate(
      req.params.id,
      {
        title,
        artist,
        duration,
      },
      { new: true }
    );

    if (!audio) {
      return res.status(404).json({ error: 'Audio not found' });
    }

    res.status(200).json(audio);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Delete audio by ID
exports.deleteAudio = async (req, res) => {
  try {
    const audio = await Audio.findByIdAndDelete(req.params.id);
    if (!audio) {
      return res.status(404).json({ error: 'Audio not found' });
    }
    res.status(200).json({ message: 'Audio deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};