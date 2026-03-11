export const getMatchedWord = (correctWord: string, guesses: string[]) => {
  const underscores = '_'.repeat(correctWord.length).split('');

  const matchedWord = guesses.reduce((result: string[], guess: string) => {
    const matchedIndexes = [...correctWord.matchAll(new RegExp(guess, 'g'))].map(({ index }) => index);

    matchedIndexes.forEach((index) => (result[index] = guess));

    return result;
  }, underscores);

  return matchedWord.join('');
};
