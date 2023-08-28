import React, { useEffect, useState } from 'react';
import AudioPlayer from '../../components/AudioPlayer';
import CommentSection from '../../components/CommentSection';
import UserInteraction from '../../components/UserInteraction';

const Home = () => {
  const [audioList, setAudioList] = useState([]);

  useEffect(() => {
    // Fetch audio data from server
    fetch('/api/audio')
      .then((response) => response.json())
      .then((data) => setAudioList(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>AudioMate</h1>
      {audioList.map((audio) => (
        <div key={audio.id}>
          <AudioPlayer audio={audio} />
          <CommentSection audio={audio} />
          <UserInteraction audio={audio} />
        </div>
      ))}
    </div>
  );
};

export default Home;