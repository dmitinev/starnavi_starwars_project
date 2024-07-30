import { render, screen } from '@testing-library/react';
import CharacterCard from '../src/components/CharacterCard';

describe('CharacterCard', () => {
  test('renders character name correctly', () => {
    const name = 'Han Solo';
    const id = 1;
    render(<CharacterCard name={name} id={id} />);
    const characterName = screen.getByText(name);
    expect(characterName).toBeInTheDocument();
  });

  test('renders link with correct href', () => {
    const name = 'Darth Vader';
    const id = 3;
    render(<CharacterCard name={name} id={id} />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', `/character/${id}`);
  });
});

