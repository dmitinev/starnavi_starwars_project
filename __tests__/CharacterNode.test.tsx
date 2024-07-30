import { screen } from '@testing-library/react';
import CharacterNode from '../src/components/CharacterNode';
import { renderComponentWithProviders } from '../src/helpers/testRenderWithProvider';

describe('CharacterNode', () => {
  test('renders character name correctly', () => {
    const name = 'Luke Skywalker';
    renderComponentWithProviders(
      <CharacterNode
        data={{ name }}
        id={''}
        type={'char'}
        dragging={false}
        zIndex={0}
        isConnectable={false}
        positionAbsoluteX={0}
        positionAbsoluteY={0}
      />,
    );
    const characterName = screen.getByText(name);
    expect(characterName).toBeInTheDocument();
  });

  test('renders avatar', () => {
    renderComponentWithProviders(
      <CharacterNode
        data={{ name: 'Darth Vader' }}
        id={''}
        type={'char'}
        dragging={false}
        zIndex={0}
        isConnectable={false}
        positionAbsoluteX={0}
        positionAbsoluteY={0}
      />,
    );
    const targetAvatar = screen.getByTestId('testAvatar');
    expect(targetAvatar).toBeInTheDocument();
  });
});

