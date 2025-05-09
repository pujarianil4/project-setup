import { render, screen } from '@testing-library/react';

describe('Example Test', () => {
  it('should pass', () => {
    expect(true).toBe(true);
  });

  it('should render a heading', () => {
    render(<h1>Hello, World!</h1>);
    expect(screen.getByText('Hello, World!')).toBeInTheDocument();
  });
});
