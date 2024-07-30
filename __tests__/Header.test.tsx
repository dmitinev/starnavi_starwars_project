import { render, screen } from '@testing-library/react';
import Header from '../src/components/Header';

describe('Header', () => {
  test('renders header with logo', () => {
    render(<Header />);
    const logoImage = screen.getByAltText('Logo');
    expect(logoImage).toBeInTheDocument();
  });

  test('renders link within header', () => {
    render(<Header />);
    const homeLink = screen.getByRole('link');
    expect(homeLink).toBeInTheDocument();
  });
});
