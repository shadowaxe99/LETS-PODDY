const express = require('express');
const router = express.Router();
const audioController = require('../controllers/audioController');

// Route to get all audios
router.get('/', audioController.getAllAudios);

// Route to get a specific audio
router.get('/:id', audioController.getAudioById);

// Route to create a new audio
router.post('/', audioController.createAudio);

// Route to update an existing audio
router.put('/:id', audioController.updateAudio);

// Route to delete an audio
router.delete('/:id', audioController.deleteAudio);

module.exports = router;