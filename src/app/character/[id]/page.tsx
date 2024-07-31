import { fetchCharacters, fetchSingleCharacter } from '@/actions/characters';
import { fetchSingleFilm } from '@/actions/films';
import { fetchSingleSpaceship } from '@/actions/spaceships';
import CharacterFlow from '@/components/CharacterFlow';
import { convertApiDataToFlowData } from '@/helpers/convertApiDataToFlowData';
import '@xyflow/react/dist/style.css';
import { Metadata } from 'next';

export const dynamicParams = true; //allow to dynamically rendered additional page if it has not been statically generated during build time

// Generate static HTML pages for all characters
export async function generateStaticParams() {
  const characters = await fetchCharacters();
  return characters.results.map((character) => ({
    params: { id: String(character.id) },
  }));
}
// Generate page title with character for all characters pages
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
  // Fetch character, films and starships data
  const character = await fetchSingleCharacter(Number(id));
  const films = await Promise.all(
    character.films.map((id) => fetchSingleFilm(id)),
  );
  const starships = await Promise.all(
    character.starships.map((id) => fetchSingleSpaceship(id)),
  );

  // call convertApiDataToFlowData to convert the fetched data to React Flow nodes and edges objects
  const { nodesArray, edgesArray } = convertApiDataToFlowData(
    character,
    films,
    starships,
  );

  return <CharacterFlow edgesArray={edgesArray} nodesArray={nodesArray} />;
}
