import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LikeButton from './like-button';

describe('Like Button', () => {
  it('renders a button', async () => {
    render(<LikeButton />);

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
  });

  it('starts with 0 likes', async () => {
    render(<LikeButton />);

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('(0)');
  });

  it('increases the number when clicked', async () => {
    render(<LikeButton />);
    const user = userEvent.setup();

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();

    await user.click(button);
    expect(button).toHaveTextContent('(1)');
  });

  it('changes color when hovered over', async () => {
    render(<LikeButton />);
    const user = userEvent.setup();

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();

    await user.click(button);
    expect(button).toHaveTextContent('(1)');
  });

  it('renders the Like Button unchanged', async () => {
    const { container } = render(<LikeButton />);
    expect(container).toMatchSnapshot();
  });
});
