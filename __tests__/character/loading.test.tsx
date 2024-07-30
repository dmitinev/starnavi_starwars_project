import { render, screen } from '@testing-library/react';
import LoadingCharacterPage from '../../src/app/character/[id]/loading';

describe('LoadingCharacterPage', () => {
  test('renders the spinner', () => {
    render(<LoadingCharacterPage />);
    const spinner = screen.getByTestId('characterInfoSpinner');
    expect(spinner).toBeInTheDocument();
  });

  test('renders the spinner with the correct color', () => {
    render(<LoadingCharacterPage />);
    const spinner = screen.getByTestId('characterInfoSpinner');
    expect(spinner).toHaveStyle({ color: 'orange' });
  });
});

