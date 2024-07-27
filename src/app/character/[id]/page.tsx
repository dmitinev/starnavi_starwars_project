import { fetchSingleCharacter } from '@/actions/characters';
import { fetchSingleFilm } from '@/actions/films';
import CharacterChartFlow from '@/components/CharacterChartFlow';
import { ICharacter } from '@/types/character';
import { IFilm } from '@/types/film';
import { Edge, Node } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

// const position = { x: 0, y: 0 };

// const initialNodes: Node[] = [
//   {
//     id: '12',
//     data: { name: 'Char node 1' },
//     draggable: false,
//     position,
//     type: 'FlowCustomCharacterNode',
//   },
//   {
//     id: '1',
//     data: { name: 'Film node 1' },
//     draggable: false,
//     position,
//     type: 'FlowCustomFilmNode',
//   },
//   {
//     id: '6',
//     data: { name: 'Film node 2' },
//     draggable: false,
//     position,
//     type: 'FlowCustomFilmNode',
//   },
// ];

// const initialEdges: Edge[] = [
//   { id: '1', source: '12', target: '1', animated: true },
//   { id: '2', source: '12', target: '6', animated: true },
// ];

export default async function CharacterPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const character = await fetchSingleCharacter(Number(id));
  const films = await Promise.all(
    character.films.map((id) => fetchSingleFilm(id)),
  );
  const { nodesArray, edgesArray } = convertApiDataToFlowData(character, films);
  console.log(nodesArray, edgesArray);

  return <CharacterChartFlow edgesArray={edgesArray} nodesArray={nodesArray} />;
}

function convertApiDataToFlowData(
  char: ICharacter,
  films: IFilm[],
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
  films.forEach((film, index) => {
    nodes.push({
      id: film.id.toString(),
      data: { name: film.title },
      draggable: false,
      position: _position,
      type: 'FlowCustomFilmNode',
    });
    edges.push({
      id: `char-film-${index}`,
      source: char.id.toString(),
      target: film.id.toString(),
      animated: true,
    });
  });

  return { nodesArray: nodes, edgesArray: edges };
}

