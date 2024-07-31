import { ICharacter } from '@/types/character';
import { IFilm } from '@/types/film';
import { IShip } from '@/types/ship';
import { Edge, Node } from '@xyflow/react';

/**
 * Converts API data to flow data.
 *
 * @param char - The character object.
 * @param films - An array of film objects.
 * @param starships - An array of starship objects.
 * @returns An object containing arrays of nodes and edges.
 */
export function convertApiDataToFlowData(
  char: ICharacter,
  films: IFilm[],
  starships: IShip[],
): { nodesArray: Node[]; edgesArray: Edge[] } {
  const _position = { x: 0, y: 0 };

  const nodes: Node[] = [];
  const edges: Edge[] = [];

  // Add character node - we are using custom node types here
  nodes.push({
    id: char.url,
    data: { name: char.name },
    draggable: false,
    position: _position,
    type: 'FlowCustomCharacterNode',
  });
  // Add film nodes and edges for the particular character
  films.forEach((film, filmIndex) => {
    nodes.push({
      id: film.url,
      data: { name: film.title },
      draggable: false,
      position: _position,
      type: 'FlowCustomFilmNode',
    });
    // Add edges between character and film nodes
    edges.push({
      id: `char-film-${filmIndex}`,
      source: char.url,
      target: film.url,
      animated: true,
    });
    // Add starship nodes and edges for the particular film
    if (starships.length > 0) {
      starships.forEach((ship, shipIndex) => {
        if (film.starships.includes(ship.id)) {
          // Add starship node, if starships are present in the film
          nodes.push({
            id: ship.url,
            data: { name: ship.name },
            draggable: false,
            position: _position,
            type: 'FlowCustomShipNode',
          });
          // Add edges between film and starship nodes
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
