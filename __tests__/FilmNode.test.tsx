import { screen } from '@testing-library/react';
import FilmNode from '../src/components/FilmNode';
import { renderComponentWithProviders } from '../src/helpers/testRenderWithProvider';

describe('FilmNode', () => {
  test('renders film name correctly', () => {
    const name = 'Baba Fet';
    renderComponentWithProviders(
      <FilmNode
        data={{ name }}
        id={''}
        type={'film'}
        dragging={false}
        zIndex={0}
        isConnectable={false}
        positionAbsoluteX={0}
        positionAbsoluteY={0}
      />,
    );
    const filmName = screen.getByText(name);
    expect(filmName).toBeInTheDocument();
  });

  test('renders avatar icon', () => {
    renderComponentWithProviders(
      <FilmNode
        data={{ name: 'Star Wars' }}
        id={''}
        type={'film'}
        dragging={false}
        zIndex={0}
        isConnectable={false}
        positionAbsoluteX={0}
        positionAbsoluteY={0}
      />,
    );
    const targetfilmIcon = screen.getByTestId('filmIcon');
    expect(targetfilmIcon).toBeInTheDocument();
  });
});
