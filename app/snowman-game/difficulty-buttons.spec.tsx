import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import DifficultyButtons from './difficulty-buttons';
import { Difficulty } from './getRandomWord';

type DifficultyValues = { name: string; difficulty: Difficulty; color: string }[];

describe('DifficultyButtons', () => {
  const singleDifficulty: DifficultyValues = [{ name: 'Test', difficulty: 'easy', color: 'green' }];
  const multipleDifficulties: DifficultyValues = [
    ...singleDifficulty,
    { name: 'Test 2', difficulty: 'medium', color: 'blue' },
    { name: 'Test 3', difficulty: 'hard', color: 'red' },
  ];
  const onClick = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders a button for a difficulty sent in', async () => {
    render(<DifficultyButtons difficulties={singleDifficulty} currentDifficulty="easy" onClick={onClick} />);

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
  });

  it('renders the correct button text', async () => {
    render(<DifficultyButtons difficulties={singleDifficulty} currentDifficulty="easy" onClick={onClick} />);

    expect(screen.getByRole('button', { name: 'Test' })).toBeInTheDocument();
  });

  it('renders a button for each difficulty', async () => {
    render(<DifficultyButtons difficulties={multipleDifficulties} currentDifficulty="easy" onClick={onClick} />);

    const buttons = screen.getAllByRole('button');

    expect(buttons).toHaveLength(3);
  });

  it('calls onClick with the correct difficulty when a button is clicked', async () => {
    const user = userEvent.setup();
    render(<DifficultyButtons difficulties={multipleDifficulties} currentDifficulty="easy" onClick={onClick} />);

    await user.click(screen.getByRole('button', { name: 'Test 2' }));

    expect(onClick).toHaveBeenCalledWith('medium');
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('applies font-bold to the currently active difficulty button', async () => {
    render(<DifficultyButtons difficulties={multipleDifficulties} currentDifficulty="medium" onClick={onClick} />);

    expect(screen.getByRole('button', { name: 'Test 2' })).toHaveClass('font-bold');
    expect(screen.getByRole('button', { name: 'Test' })).not.toHaveClass('font-bold');
    expect(screen.getByRole('button', { name: 'Test 3' })).not.toHaveClass('font-bold');
  });

  it('renders no buttons when difficulties array is empty', async () => {
    render(<DifficultyButtons difficulties={[]} currentDifficulty="easy" onClick={onClick} />);

    expect(screen.queryAllByRole('button')).toHaveLength(0);
  });
});
