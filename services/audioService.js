const AudioService = require('../models/audio');

class AudioService {
  constructor() {
    this.audioModel = new AudioModel();
  }

  async getAudioById(audioId) {
    try {
      const audio = await this.audioModel.findById(audioId);
      return audio;
    } catch (error) {
      console.error(error);
      throw new Error('Failed to get audio by ID');
    }
  }

  async createAudio(audioData) {
    try {
      const audio = await this.audioModel.create(audioData);
      return audio;
    } catch (error) {
      console.error(error);
      throw new Error('Failed to create audio');
    }
  }

  async updateAudio(audioId, audioData) {
    try {
      const audio = await this.audioModel.findByIdAndUpdate(audioId, audioData, { new: true });
      return audio;
    } catch (error) {
      console.error(error);
      throw new Error('Failed to update audio');
    }
  }

  async deleteAudio(audioId) {
    try {
      await this.audioModel.findByIdAndDelete(audioId);
    } catch (error) {
      console.error(error);
      throw new Error('Failed to delete audio');
    }
  }
}

module.exports = AudioService;