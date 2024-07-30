import { renderComponentWithProviders } from '@/helpers/testRenderWithProvider';
import { screen } from '@testing-library/react';
import { fetchSingleCharacter } from '../../src/actions/characters';
import { fetchSingleFilm } from '../../src/actions/films';
import { fetchSingleSpaceship } from '../../src/actions/spaceships';
import CharacterPage from '../../src/app/character/[id]/page';
import { characterMock } from '../mocks/characterMock';
import { mockedFilms } from '../mocks/filmsMock';
import { mockReactFlow } from '../mocks/reactFlowMock';
import { mockedShips } from '../mocks/starShipsMock';

jest.mock('../../src/actions/characters', () => ({
  fetchSingleCharacter: jest.fn(),
}));
jest.mock('../../src/actions/films', () => ({
  fetchSingleFilm: jest.fn(),
}));
jest.mock('../../src/actions/spaceships', () => ({
  fetchSingleSpaceship: jest.fn(),
}));
jest.mock('../../src/helpers/convertApiDataToFlowData', () => ({
  convertApiDataToFlowData: () => ({
    nodesArray: [],
    edgesArray: [],
  }),
}));

describe('CharacterPage', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockReactFlow();
  });

  test('renders CharacterFlow renders and fetches data', async () => {
    const characterId = '12';
    const charInfo = characterMock.find(
      (char) => char.id === Number(characterId),
    );
    (fetchSingleCharacter as jest.Mock).mockResolvedValue(charInfo);
    (fetchSingleFilm as jest.Mock).mockResolvedValue(
      mockedFilms.filter((film) => charInfo?.films.includes(film.id)),
    );
    (fetchSingleSpaceship as jest.Mock).mockResolvedValue(
      mockedShips.filter((ship) => charInfo?.starships.includes(ship.id)),
    );

    const page = await CharacterPage({ params: { id: characterId } });

    renderComponentWithProviders(page);

    // Assert that fetchSingleCharacter is called with the correct characterId
    expect(fetchSingleCharacter).toHaveBeenCalledWith(Number(characterId));

    // Assert that fetchSingleFilm is called and returned the correct films
    expect(fetchSingleFilm).toHaveBeenCalledTimes(charInfo?.films.length ?? 0);

    // Assert that fetchSingleSpaceship is called and returned the correct ships
    expect(fetchSingleSpaceship).toHaveBeenCalledTimes(
      charInfo?.starships.length ?? 0,
    );
  });
  test('react flow panel is shown when page randered', async () => {
    const characterId = '12';
    const charInfo = characterMock.find(
      (char) => char.id === Number(characterId),
    );
    (fetchSingleCharacter as jest.Mock).mockResolvedValue(charInfo);
    (fetchSingleFilm as jest.Mock).mockResolvedValue(
      mockedFilms.filter((film) => charInfo?.films.includes(film.id)),
    );
    (fetchSingleSpaceship as jest.Mock).mockResolvedValue(
      mockedShips.filter((ship) => charInfo?.starships.includes(ship.id)),
    );

    const page = await CharacterPage({ params: { id: characterId } });

    renderComponentWithProviders(page);

    expect(screen.getByTestId('rf__wrapper')).toBeInTheDocument();
  });
});

