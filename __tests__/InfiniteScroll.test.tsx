import { render, screen } from '@testing-library/react';
import 'whatwg-fetch';
import InfiniteScroll from '../src/components/InfiniteScroll';
import { characterMock } from './mocks/characterMock';

describe('InfiniteScroll', () => {
  test('loads more characters when in view', async () => {
    render(<InfiniteScroll initialChars={characterMock} />);

    const spinner = screen.getByTestId('spinner');
    expect(spinner).toBeInTheDocument();

    const characterCardsOnScreen = screen.getAllByTestId('character-card');
    expect(characterCardsOnScreen).toHaveLength(characterMock.length);
  });
  test('error page when there is no characters to render', async () => {
    render(<InfiniteScroll initialChars={[]} />);

    screen.logTestingPlaygroundURL();
    expect(
      screen.getByRole('heading', {
        name: /whoops, error has happened!\./i,
      }),
    ).toBeInTheDocument();
  });
});
