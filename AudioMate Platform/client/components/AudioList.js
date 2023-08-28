import React from 'react';

const AudioList = ({ audios }) => {
  return (
    <div>
      <h2>Audio List</h2>
      {audios.map((audio) => (
        <div key={audio.id}>
          <h3>{audio.title}</h3>
          <p>{audio.artist}</p>
          <audio controls>
            <source src={audio.url} type="audio/mpeg" />
          </audio>
        </div>
      ))}
    </div>
  );
};

export default AudioList;