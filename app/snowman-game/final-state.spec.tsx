import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FinalState from './final-state';

describe('FinalState', () => {
  const onClick = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the message', () => {
    render(<FinalState message="You won!" onClick={onClick} />);

    expect(screen.getByText('You won!')).toBeInTheDocument();
  });

  it('renders a "Start Over!" button', () => {
    render(<FinalState message="You lost!" onClick={onClick} />);

    expect(screen.getByRole('button', { name: 'Start Over!' })).toBeInTheDocument();
  });

  it('calls onClick when the button is clicked', async () => {
    const user = userEvent.setup();
    render(<FinalState message="You lost!" onClick={onClick} />);

    await user.click(screen.getByRole('button', { name: 'Start Over!' }));

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});

