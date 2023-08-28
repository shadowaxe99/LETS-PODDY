import React from 'react';
import { AudioPlayer } from '../../components/AudioPlayer';
import { CommentSection } from '../../components/CommentSection';
import { UserInteraction } from '../../components/UserInteraction';

export const Home: React.FC = () => {
  return (
    <div>
      <h1>Welcome to AudioMate</h1>
      <AudioPlayer />
      <CommentSection />
      <UserInteraction />
    </div>
  );
};