'use client';

import { useState } from 'react';

export interface LikeButtonProps {
  children?: React.ReactNode;

  /** Optional click handler */
  onClick?: () => void;
}

export default function LikeButton({ children, onClick }: LikeButtonProps) {
  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
    onClick?.();
  }

  return (
    <button className="bg-sky-500 hover:bg-sky-700 rounded-full px-4 text-white" onClick={handleClick}>
      {children ?? 'Like'} <span className="font-semibold">({likes})</span>
    </button>
  );
}
