import { render, screen } from '@testing-library/react';
import NotFound from '../../src/app/character/[id]/not-found';

describe('NotFound', () => {
  test('renders the page with the correct text', () => {
    render(<NotFound />);

    const heading = screen.getByText(/404/i);
    expect(heading).toBeInTheDocument();

    const highlight = screen.getByText(/You lost your own way my son.../i);
    expect(highlight).toBeInTheDocument();
  });
});
