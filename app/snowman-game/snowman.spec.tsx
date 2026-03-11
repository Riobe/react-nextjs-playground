import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Snowman from './snowman';

describe('Snowman', () => {
  it('renders the base container with 0 errors', () => {
    const { container } = render(<Snowman errors={0} />);

    expect(container.querySelector('.snowman')).toBeInTheDocument();
    expect(container.querySelector('.Hat_Top')).not.toBeInTheDocument();
    expect(container.querySelector('.Hat_Middle')).not.toBeInTheDocument();
    expect(container.querySelector('.Hat_Bottom')).not.toBeInTheDocument();
    expect(container.querySelector('.Scarf_Center')).not.toBeInTheDocument();
    expect(container.querySelector('.Scarf_Right')).not.toBeInTheDocument();
    expect(container.querySelector('.Scarf_Left')).not.toBeInTheDocument();
    expect(container.querySelector('.Nose')).not.toBeInTheDocument();
    expect(container.querySelector('.Eye_Right')).not.toBeInTheDocument();
    expect(container.querySelector('.Eye_Left')).not.toBeInTheDocument();
    expect(container.querySelector('.Ellipse_Top')).not.toBeInTheDocument();
    expect(container.querySelector('.Ellipse_Middle')).not.toBeInTheDocument();
    expect(container.querySelector('.Ellipse_Bottom')).not.toBeInTheDocument();
  });

  it('renders the bottom ellipse at 1 error', () => {
    const { container } = render(<Snowman errors={1} />);

    expect(container.querySelector('.Ellipse_Bottom')).toBeInTheDocument();
    expect(container.querySelector('.Ellipse_Middle')).not.toBeInTheDocument();
  });

  it('renders the middle ellipse at 2 errors', () => {
    const { container } = render(<Snowman errors={2} />);

    expect(container.querySelector('.Ellipse_Middle')).toBeInTheDocument();
    expect(container.querySelector('.Ellipse_Top')).not.toBeInTheDocument();
  });

  it('renders the top ellipse at 3 errors', () => {
    const { container } = render(<Snowman errors={3} />);

    expect(container.querySelector('.Ellipse_Top')).toBeInTheDocument();
    expect(container.querySelector('.Scarf_Center')).not.toBeInTheDocument();
  });

  it('renders the scarf at 4 errors', () => {
    const { container } = render(<Snowman errors={4} />);

    expect(container.querySelector('.Scarf_Center')).toBeInTheDocument();
    expect(container.querySelector('.Scarf_Right')).toBeInTheDocument();
    expect(container.querySelector('.Scarf_Left')).toBeInTheDocument();
    expect(container.querySelector('.Hat_Top')).not.toBeInTheDocument();
  });

  it('renders the hat at 5 errors', () => {
    const { container } = render(<Snowman errors={5} />);

    expect(container.querySelector('.Hat_Top')).toBeInTheDocument();
    expect(container.querySelector('.Hat_Middle')).toBeInTheDocument();
    expect(container.querySelector('.Hat_Bottom')).toBeInTheDocument();
    expect(container.querySelector('.Nose')).not.toBeInTheDocument();
  });

  it('renders the face at 6 errors', () => {
    const { container } = render(<Snowman errors={6} />);

    expect(container.querySelector('.Nose')).toBeInTheDocument();
    expect(container.querySelector('.Eye_Right')).toBeInTheDocument();
    expect(container.querySelector('.Eye_Left')).toBeInTheDocument();
  });

  it('applies an optional className to the container', () => {
    const { container } = render(<Snowman errors={0} className="test-class" />);

    expect(container.querySelector('.snowman')).toHaveClass('test-class');
  });
});

