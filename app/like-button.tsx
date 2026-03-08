'use client';

import { useState } from 'react';

export default function LikeButton() {
  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <button className="bg-sky-500 hover:bg-sky-700 rounded-full px-4 text-white" onClick={handleClick}>
      Like <span className="font-semibold">({likes})</span>
    </button>
  );
}
