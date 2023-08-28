import express from 'express';
import { Router } from 'express';
import { createAudio, getAudio, updateAudio, deleteAudio } from '../controllers/AudioController';

const router: Router = express.Router();

// Create a new audio
router.post('/', createAudio);

// Get audio by ID
router.get('/:id', getAudio);

// Update audio by ID
router.put('/:id', updateAudio);

// Delete audio by ID
router.delete('/:id', deleteAudio);

export default router;