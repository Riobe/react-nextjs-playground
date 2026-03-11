import { Difficulty } from './getRandomWord';
import clsx from 'clsx';
import '@/app/globals.css';

export default function DifficultyButtons({
  difficulties,
  currentDifficulty,
  onClick,
}: {
  difficulties: { name: string; difficulty: Difficulty; color: string }[];
  currentDifficulty: Difficulty;
  onClick: (difficulty: Difficulty) => void;
}) {
  return (
    <div className="flex justify-center">
      {difficulties.map((buttonDifficulty) => {
        const className = `bg-${buttonDifficulty.color}-700 hover:bg-${buttonDifficulty.color}-900 rounded-full px-4 text-white${buttonDifficulty.difficulty === currentDifficulty ? ' font-bold' : ''}`;
        return (
          <button
            className={className}
            key={buttonDifficulty.difficulty}
            onClick={() => {
              onClick(buttonDifficulty.difficulty);
            }}
          >
            {buttonDifficulty.name}
          </button>
        );
      })}
    </div>
  );
}
