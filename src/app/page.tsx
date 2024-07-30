import { fetchCharacters } from '@/actions/characters';
import InfiniteScroll from '@/components/InfiniteScroll';

export default async function Home() {
  const characters = await fetchCharacters(1);
  return (
    <section data-testid="mainAppPage">
      <InfiniteScroll initialChars={characters.results} />
    </section>
  );
}
