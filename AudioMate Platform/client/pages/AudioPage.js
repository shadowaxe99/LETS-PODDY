import React, { useState, useEffect } from 'react';
import AudioList from '../components/AudioList';

const AudioPage = () => {
  const [audioList, setAudioList] = useState([]);

  useEffect(() => {
    fetchAudioList();
  }, []);

  const fetchAudioList = async () => {
    try {
      const response = await fetch('/api/audio');
      const data = await response.json();
      setAudioList(data);
    } catch (error) {
      console.error('Error fetching audio list:', error);
    }
  };

  return (
    <div>
      <h1>Audio Page</h1>
      <AudioList audioList={audioList} />
    </div>
  );
};

export default AudioPage;