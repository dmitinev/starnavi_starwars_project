import { fetchCharacters, fetchSingleCharacter } from '@/actions/characters';
import { fetchSingleFilm } from '@/actions/films';
import { fetchSingleSpaceship } from '@/actions/spaceships';
import CharacterChartFlow from '@/components/CharacterChartFlow';
import { ICharacter } from '@/types/character';
import { IFilm } from '@/types/film';
import { IShip } from '@/types/ship';
import { Edge, Node } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { Metadata } from 'next';

export async function generateStaticParams() {
  const characters = await fetchCharacters();
  return characters.results.map((char) => ({
    params: { id: char.id.toString() },
  }));
}

export async function generateMetadata({
  params: { id },
}: {
  params: { id: string };
}): Promise<Metadata> {
  const character = await fetchSingleCharacter(Number(id));
  return {
    title: character.name,
  };
}

export default async function CharacterPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const character = await fetchSingleCharacter(Number(id));
  const films = await Promise.all(
    character.films.map((id) => fetchSingleFilm(id)),
  );
  const starships = await Promise.all(
    character.starships.map((id) => fetchSingleSpaceship(id)),
  );
  const { nodesArray, edgesArray } = convertApiDataToFlowData(
    character,
    films,
    starships,
  );

  return <CharacterChartFlow edgesArray={edgesArray} nodesArray={nodesArray} />;
}

function convertApiDataToFlowData(
  char: ICharacter,
  films: IFilm[],
  starships: IShip[],
): { nodesArray: Node[]; edgesArray: Edge[] } {
  const _position = { x: 0, y: 0 };

  const nodes: Node[] = [];
  const edges: Edge[] = [];

  nodes.push({
    id: char.id.toString(),
    data: { name: char.name },
    draggable: false,
    position: _position,
    type: 'FlowCustomCharacterNode',
  });
  films.forEach((film, filmIndex) => {
    nodes.push({
      id: film.id.toString(),
      data: { name: film.title },
      draggable: false,
      position: _position,
      type: 'FlowCustomFilmNode',
    });
    edges.push({
      id: `char-film-${filmIndex}`,
      source: char.id.toString(),
      target: film.id.toString(),
      animated: true,
    });
    if (starships.length > 0) {
      starships.forEach((ship, shipIndex) => {
        if (film.starships.includes(ship.id)) {
          nodes.push({
            id: ship.id.toString(),
            data: { name: ship.name, model: ship.model },
            draggable: false,
            position: _position,
            type: 'FlowCustomShipNode',
          });
          edges.push({
            id: `film-ship-${filmIndex}-${shipIndex}`,
            source: film.id.toString(),
            target: ship.id.toString(),
            animated: true,
          });
        }
      });
    }
  });

  return { nodesArray: nodes, edgesArray: edges };
}
