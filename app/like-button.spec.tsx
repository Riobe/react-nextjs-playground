import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import LikeButton from './like-button';

describe('Like Button', () => {
  it('renders a button', () => {
    render(<LikeButton />);

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
  });

  it('renders the Like Button unchanged', () => {
    const { container } = render(<LikeButton />);
    expect(container).toMatchSnapshot();
  });
});
