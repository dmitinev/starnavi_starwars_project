import { fetchSingleCharacter } from '@/actions/characters';
import { fetchSingleFilm } from '@/actions/films';
import { fetchSingleSpaceship } from '@/actions/spaceships';
import CharacterFlow from '@/components/CharacterFlow';
import { convertApiDataToFlowData } from '@/helpers/convertApiDataToFlowData';
import '@xyflow/react/dist/style.css';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

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
}: Readonly<{
  params: { id: string };
}>) {
  if (Number.isNaN(Number(id))) {
    return notFound();
  }
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

  return <CharacterFlow edgesArray={edgesArray} nodesArray={nodesArray} />;
}
