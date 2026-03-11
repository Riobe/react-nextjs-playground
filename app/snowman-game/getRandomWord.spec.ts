import { getRandomWord, type Difficulty } from './getRandomWord';

describe('getRandomWord', () => {
  it('returns a string', () => {
    expect(typeof getRandomWord()).toBe('string');
  });

  it.each([['easy'], ['medium'], ['hard']] as Difficulty[][])('returns a word from the %s list', (difficulty) => {
    const word = getRandomWord(difficulty);
    expect(typeof word).toBe('string');
    expect(word.length).toBeGreaterThan(0);
  });

  it('returns shorter words for easy difficulty', () => {
    for (let i = 0; i < 20; i++) {
      expect(getRandomWord('easy').length).toBeLessThanOrEqual(3);
    }
  });

  it('returns medium length words for medium difficulty (default)', () => {
    for (let i = 0; i < 20; i++) {
      expect(getRandomWord().length).toBe(6);
    }
  });

  it('returns longer words for hard difficulty', () => {
    for (let i = 0; i < 20; i++) {
      expect(getRandomWord('hard').length).toBeGreaterThanOrEqual(5);
    }
  });

  it('returns lowercase words', () => {
    for (let i = 0; i < 20; i++) {
      const word = getRandomWord();
      expect(word).toBe(word.toLowerCase());
    }
  });
});
