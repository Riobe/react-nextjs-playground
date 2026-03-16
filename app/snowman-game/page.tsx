'use client';

import { useState } from 'react';
import Snowman from './snowman';
import FinalState from './final-state';
import { type Difficulty, getRandomWord } from './getRandomWord';
import { getMatchedWord } from './getMatchedWord';
import DifficultyButtons from './difficulty-buttons';

const difficulties = [
  { name: 'Short', difficulty: 'easy' },
  { name: 'Medium', difficulty: 'medium' },
  { name: 'Longer', difficulty: 'hard' },
] as { name: string; difficulty: Difficulty; color: string }[];

export default function SnowmanGame() {
  const [errors, setErrors] = useState(0);
  const [guesses, setGuesses] = useState([] as string[]);
  const [correctWord, setCorrectWord] = useState(() => getRandomWord());
  const [difficulty, setDifficulty] = useState('medium' as Difficulty);

  const matchedWord = getMatchedWord(correctWord, guesses);
  const hasWon = matchedWord === correctWord && correctWord.length > 0;
  const triesLeft = 7 - errors;

  const reset = (difficulty?: Difficulty) => {
    setErrors(0);
    setGuesses([]);
    if (difficulty) {
      setDifficulty(difficulty);
    }
    setCorrectWord(getRandomWord(difficulty));
  };

  if (triesLeft === 0) {
    return (
      <FinalState message={`Oops! The correct word was ${correctWord}! Try again?`} onClick={() => reset(difficulty)} />
    );
  } else if (hasWon) {
    return (
      <FinalState message={`Congratulations! It was ${correctWord}. Play again?`} onClick={() => reset(difficulty)} />
    );
  }

  return (
    <div id="snowman-game" className="flex items-start w-full">
      <Snowman errors={errors} className="mr-20 border-sky-500" />
      <div>
        <div className="flex justify-center">
          <button
            className="bg-sky-500 hover:bg-sky-700 rounded-full px-4 text-white"
            onClick={() => reset(difficulty)}
          >
            Start Over!
          </button>
        </div>

        <DifficultyButtons
          difficulties={difficulties}
          currentDifficulty={difficulty}
          onClick={(difficulty) => {
            reset(difficulty);
          }}
        />

        <form
          action={(formData) => {
            const guess = formData.get('guess') as string;
            if (guesses.includes(guess)) {
              return;
            }
            setGuesses([...guesses, guess]);
            if (!correctWord.includes(guess)) {
              setErrors(errors + 1);
            }
          }}
        >
          <label>
            Next Guess:
            <input id="guess" name="guess" type="text" maxLength={1} className="bg-neutral-500" />
          </label>
        </form>

        <div data-testid="matched-word">{matchedWord}</div>
        <div>Tries left: {triesLeft}</div>

        {/* <div className="hidden text-red-200 text-green-200"></div> */}
        <div>
          <p className="text-white">Guessed letters:</p>
          {guesses.map((guess, index) => (
            <p key={index} className={`font-bold text-${correctWord.includes(guess) ? 'green' : 'red'}-200`}>
              {guess}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
