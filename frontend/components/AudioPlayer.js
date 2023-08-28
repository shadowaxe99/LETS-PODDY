import React from 'react';

class AudioPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      audioUrl: props.audioUrl,
      isPlaying: false
    };
  }

  handlePlay = () => {
    this.setState({ isPlaying: true });
    // Logic to play audio
  };

  handlePause = () => {
    this.setState({ isPlaying: false });
    // Logic to pause audio
  };

  render() {
    const { audioUrl, isPlaying } = this.state;

    return (
      <div>
        <audio src={audioUrl} controls />
        {isPlaying ? (
          <button onClick={this.handlePause}>Pause</button>
        ) : (
          <button onClick={this.handlePlay}>Play</button>
        )}
      </div>
    );
  }
}

export default AudioPlayer;