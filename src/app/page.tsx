import { fetchCharacters } from '@/actions/characters';
import InfiniteScroll from '@/components/InfiniteScroll';

export default async function Home() {
  const characters = await fetchCharacters(1);
  return (
    <div>
      <InfiniteScroll initialChars={characters.results} />
    </div>
  );
}
