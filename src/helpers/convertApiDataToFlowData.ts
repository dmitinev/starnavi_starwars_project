import { ICharacter } from '@/types/character';
import { IFilm } from '@/types/film';
import { IShip } from '@/types/ship';
import { Edge, Node } from '@xyflow/react';

export function convertApiDataToFlowData(
  char: ICharacter,
  films: IFilm[],
  starships: IShip[],
): { nodesArray: Node[]; edgesArray: Edge[] } {
  const _position = { x: 0, y: 0 };

  const nodes: Node[] = [];
  const edges: Edge[] = [];

  nodes.push({
    id: char.url,
    data: { name: char.name },
    draggable: false,
    position: _position,
    type: 'FlowCustomCharacterNode',
  });
  films.forEach((film, filmIndex) => {
    nodes.push({
      id: film.url,
      data: { name: film.title },
      draggable: false,
      position: _position,
      type: 'FlowCustomFilmNode',
    });
    edges.push({
      id: `char-film-${filmIndex}`,
      source: char.url,
      target: film.url,
      animated: true,
    });
    if (starships.length > 0) {
      starships.forEach((ship, shipIndex) => {
        if (film.starships.includes(ship.id)) {
          nodes.push({
            id: ship.url,
            data: { name: ship.name },
            draggable: false,
            position: _position,
            type: 'FlowCustomShipNode',
          });
          edges.push({
            id: `film-ship-${filmIndex}-${shipIndex}`,
            source: film.url,
            target: ship.url,
            animated: true,
          });
        }
      });
    }
  });

  return { nodesArray: nodes, edgesArray: edges };
}
