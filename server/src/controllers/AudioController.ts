import { Request, Response } from 'express';
import { Audio } from '../models/Audio';

export const getAudios = async (req: Request, res: Response) => {
  try {
    const audios = await Audio.find();
    res.status(200).json(audios);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch audios' });
  }
};

export const createAudio = async (req: Request, res: Response) => {
  try {
    const { title, artist, duration } = req.body;
    const audio = new Audio({ title, artist, duration });
    await audio.save();
    res.status(201).json(audio);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create audio' });
  }
};

export const deleteAudio = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await Audio.findByIdAndDelete(id);
    res.status(200).json({ message: 'Audio deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete audio' });
  }
};