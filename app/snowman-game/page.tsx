'use client';

import { useState, useEffect } from 'react';
import Snowman from './snowman';
import FinalState from './final-state';
import { type Difficulty, getRandomWord } from './getRandomWord';
import { getMatchedWord } from './getMatchedWord';
import DifficultyButtons from './difficulty-buttons';

const difficulties = [
  { name: 'Short', difficulty: 'easy', color: 'green' },
  { name: 'Medium', difficulty: 'medium', color: 'blue' },
  { name: 'Longer', difficulty: 'hard', color: 'rose' },
] as { name: string; difficulty: Difficulty; color: string }[];

export default function SnowmanGame() {
  const [errors, setErrors] = useState(0);
  const [guesses, setGuesses] = useState([] as string[]);
  const [correctWord, setCorrectWord] = useState('');
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

  useEffect(() => {
    // Effects are intended to synchronize state between React and external systems
    // but Next.js causes this to be a problem because it tries to create an initial
    // render on the server that then mismatches if the useState hook is initialized
    // with a random value. Putting it in an effect makes the intended rerender
    // to be marked as purposeful
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCorrectWord(getRandomWord());
  }, []);

  if (triesLeft === 0) {
    return <FinalState message={`Oops! The correct word was ${correctWord}! Try again?`} onClick={() => reset()} />;
  } else if (hasWon) {
    return <FinalState message={`Congratulations! It was ${correctWord}. Play again?`} onClick={() => reset()} />;
  }

  return (
    <div id="snowman-game" className="flex items-start w-full">
      <Snowman errors={errors} className="mr-20 border-sky-500" />
      <div>
        <div className="flex justify-center">
          <button className="bg-sky-500 hover:bg-sky-700 rounded-full px-4 text-white" onClick={() => reset()}>
            Start Over!
          </button>
        </div>

        <DifficultyButtons
          difficulties={difficulties}
          currentDifficulty={difficulty}
          onClick={(difficulty) => reset(difficulty)}
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

        <div>{matchedWord}</div>
        <div>Tries left: {triesLeft}</div>

        <div className="text-green-200 text-red-200">
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
