import { getMatchedWord } from './getMatchedWord';

describe('getMatchedWord', () => {
  it('should return only underscores if no guesses have been made', async () => {
    const guesses: string[] = [];
    const correctWord = 'test';

    const matched = getMatchedWord(correctWord, guesses);

    expect(matched).toBe('____');
  });

  it('should switch to a letter from an underscore if guessed correctly', async () => {
    const guesses: string[] = ['e'];
    const correctWord = 'test';

    const matched = getMatchedWord(correctWord, guesses);

    expect(matched).toBe('_e__');
  });

  it('should switch multiple letters from an underscore if guessed correctly', async () => {
    const guesses: string[] = ['t'];
    const correctWord = 'test';

    const matched = getMatchedWord(correctWord, guesses);

    expect(matched).toBe('t__t');
  });

  it('should return the full word if completely guessed', async () => {
    const guesses: string[] = ['t', 'e', 's'];
    const correctWord = 'test';

    const matched = getMatchedWord(correctWord, guesses);

    expect(matched).toBe('test');
  });

  it('should change  no underscores for incorrect guesses', async () => {
    const guesses: string[] = ['a', 'b', 'c'];
    const correctWord = 'test';

    const matched = getMatchedWord(correctWord, guesses);

    expect(matched).toBe('____');
  });
});
