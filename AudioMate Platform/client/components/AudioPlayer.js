import React from 'react';

const AudioPlayer = ({ audioUrl }) => {
  const audioRef = React.useRef(null);

  const handlePlay = () => {
    audioRef.current.play();
  };

  const handlePause = () => {
    audioRef.current.pause();
  };

  return (
    <div>
      <audio ref={audioRef} src={audioUrl} />
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
    </div>
  );
};

export default AudioPlayer;