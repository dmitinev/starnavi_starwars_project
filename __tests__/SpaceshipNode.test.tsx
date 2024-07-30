import { screen } from '@testing-library/react';
import SpaceshipNode from '../src/components/SpaceshipNode';
import { renderComponentWithProviders } from '../src/helpers/testRenderWithProvider';

describe('FlowCustomFilmNode', () => {
  test('renders spaceship name correctly', () => {
    const name = 'Millennium Falcon';
    renderComponentWithProviders(
      <SpaceshipNode
        data={{ name }}
        id={''}
        type={'ship'}
        dragging={false}
        zIndex={0}
        isConnectable={false}
        positionAbsoluteX={0}
        positionAbsoluteY={0}
      />,
    );
    const spaceshipName = screen.getByText(`"${name}"`);
    expect(spaceshipName).toBeInTheDocument();
  });

  test('renders spaceship icon', () => {
    renderComponentWithProviders(
      <SpaceshipNode
        data={{ name: 'Star Destroyer' }}
        id={''}
        type={'ship'}
        dragging={false}
        zIndex={0}
        isConnectable={false}
        positionAbsoluteX={0}
        positionAbsoluteY={0}
      />,
    );
    const spaceshipIcon = screen.getByTestId('testSpaceshipIcon');
    expect(spaceshipIcon).toBeInTheDocument();
  });
});
