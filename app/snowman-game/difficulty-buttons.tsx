import { Difficulty } from './getRandomWord';
import clsx from 'clsx';
import './difficulty-buttons.css';

// If this template string is put directly into the clsx class name, the CSS for these
// classes won't be included, so even though they'll be applied as classes, they won't
// do anything.
const buttonStyle = (color: string) => {
  return `difficulty-button ${color}-button`;
};

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
      {difficulties.map((buttonDifficulty) => (
        <button
          className={clsx(buttonStyle(buttonDifficulty.difficulty), {
            'font-bold': buttonDifficulty.difficulty === currentDifficulty,
          })}
          key={buttonDifficulty.difficulty}
          onClick={() => {
            onClick(buttonDifficulty.difficulty);
          }}
        >
          {buttonDifficulty.name}
        </button>
      ))}
    </div>
  );
}
