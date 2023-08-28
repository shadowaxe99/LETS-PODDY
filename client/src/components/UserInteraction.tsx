import React, { useState } from 'react';

const UserInteraction = () => {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleComment = (comment) => {
    setComments([...comments, comment]);
  };

  return (
    <div>
      <button onClick={handleLike}>Like</button>
      <p>Likes: {likes}</p>
      <input type="text" placeholder="Add a comment" onChange={(e) => handleComment(e.target.value)} />
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserInteraction;