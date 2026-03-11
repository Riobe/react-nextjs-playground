import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SnowmanGame from './page';
import { getRandomWord } from './getRandomWord';

jest.mock('./getRandomWord', () => ({
  getRandomWord: jest.fn(),
}));

const mockedGetRandomWord = jest.mocked(getRandomWord);

const submitGuess = async (user: ReturnType<typeof userEvent.setup>, letter: string) => {
  const input = screen.getByLabelText(/next guess/i);
  await user.clear(input);
  await user.type(input, letter);
  await user.keyboard('{Enter}');
};

describe('SnowmanGame', () => {
  beforeEach(() => {
    mockedGetRandomWord.mockReturnValue('cat');
  });

  it('renders the game UI on initial load', () => {
    render(<SnowmanGame />);

    expect(screen.getByRole('button', { name: 'Start Over!' })).toBeInTheDocument();
    expect(screen.getByLabelText(/next guess/i)).toBeInTheDocument();
    expect(screen.getByText('Tries left: 7')).toBeInTheDocument();
  });

  it('renders the difficulty buttons', () => {
    render(<SnowmanGame />);

    expect(screen.getByRole('button', { name: 'Short' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Medium' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Longer' })).toBeInTheDocument();
  });

  it('does not decrement tries left after a correct guess', async () => {
    const user = userEvent.setup();
    render(<SnowmanGame />);

    await submitGuess(user, 'c');

    expect(screen.getByText('Tries left: 7')).toBeInTheDocument();
  });

  it('decrements tries left after an incorrect guess', async () => {
    const user = userEvent.setup();
    render(<SnowmanGame />);

    await submitGuess(user, 'z');

    expect(screen.getByText('Tries left: 6')).toBeInTheDocument();
  });

  it('does not count a duplicate guess', async () => {
    const user = userEvent.setup();
    render(<SnowmanGame />);

    await submitGuess(user, 'z');
    await submitGuess(user, 'z');

    expect(screen.getByText('Tries left: 6')).toBeInTheDocument();
  });

  it('reveals correctly guessed letters in the word display', async () => {
    const user = userEvent.setup();
    render(<SnowmanGame />);

    await submitGuess(user, 'c');

    expect(screen.getByText('c__')).toBeInTheDocument();
  });

  it('shows the loss final state when tries run out', async () => {
    mockedGetRandomWord.mockReturnValue('a');
    const user = userEvent.setup();
    render(<SnowmanGame />);

    for (const letter of ['b', 'c', 'd', 'e', 'f', 'g', 'h']) {
      await submitGuess(user, letter);
    }

    expect(screen.getByText(/oops! the correct word was a/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Start Over!' })).toBeInTheDocument();
  });

  it('shows the win final state when the word is fully guessed', async () => {
    mockedGetRandomWord.mockReturnValue('a');
    const user = userEvent.setup();
    render(<SnowmanGame />);

    await submitGuess(user, 'a');

    expect(screen.getByText(/congratulations! it was a/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Start Over!' })).toBeInTheDocument();
  });

  it('resets the game when "Start Over!" is clicked', async () => {
    const user = userEvent.setup();
    render(<SnowmanGame />);

    await submitGuess(user, 'z');
    expect(screen.getByText('Tries left: 6')).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'Start Over!' }));

    expect(screen.getByText('Tries left: 7')).toBeInTheDocument();
  });

  it('resets the game when a difficulty button is clicked', async () => {
    const user = userEvent.setup();
    render(<SnowmanGame />);

    await submitGuess(user, 'z');
    expect(screen.getByText('Tries left: 6')).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'Short' }));

    expect(screen.getByText('Tries left: 7')).toBeInTheDocument();
    expect(mockedGetRandomWord).toHaveBeenLastCalledWith('easy');
  });
});

