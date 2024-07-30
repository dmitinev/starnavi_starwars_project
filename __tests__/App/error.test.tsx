import { fireEvent, render, screen } from '@testing-library/react';
import CharacterErrorPage from '../../src/app/error';

describe('CharacterErrorPage', () => {
  test('renders error message', () => {
    const resetMock = jest.fn();
    const error = new Error('Test error');
    render(<CharacterErrorPage error={error} reset={resetMock} />);

    const errorMessage = screen.getByTestId('errorText');
    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveTextContent('Whoops, error has happened!');
  });

  test('calls reset function when "Try to reload" button is clicked', () => {
    const resetMock = jest.fn();
    const error = new Error('Test error');
    render(<CharacterErrorPage error={error} reset={resetMock} />);

    const reloadButton = screen.getByRole('button', { name: /try to reload/i });
    fireEvent.click(reloadButton);

    expect(resetMock).toHaveBeenCalled();
  });
});

