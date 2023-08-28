const express = require('express');
const router = express.Router();
const audioController = require('../controllers/audioController');

// Route to get all audio files
router.get('/audio', audioController.getAllAudio);

// Route to get a specific audio file
router.get('/audio/:id', audioController.getAudioById);

// Route to upload a new audio file
router.post('/audio', audioController.uploadAudio);

// Route to update an existing audio file
router.put('/audio/:id', audioController.updateAudio);

// Route to delete an audio file
router.delete('/audio/:id', audioController.deleteAudio);

module.exports = router;