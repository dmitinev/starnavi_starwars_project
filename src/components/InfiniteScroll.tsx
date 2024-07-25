'use client';
import { fetchCharacters } from '@/actions/characters';
import CharacterCard from '@/components/CharacterCard';
import { ICharacter } from '@/types/character';
import { removeDuplicateObjects } from '@/utils/removeDuplicateObjects';
import { Flex, Spinner } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export default function InfiniteScroll({
  initialChars,
}: {
  initialChars: ICharacter[];
}) {
  const [characters, setCharacters] = useState<ICharacter[]>(initialChars);
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [ref, inView] = useInView();

  async function loadMoreCharacters() {
    const newPage = page + 1;
    const charactersFromApi = await fetchCharacters(newPage);
    if (!charactersFromApi.next) {
      setHasMore(false);
      return;
    }
    setPage(newPage);
    setCharacters(
      removeDuplicateObjects([...characters, ...charactersFromApi.results]),
    );
  }

  useEffect(() => {
    if (inView) {
      loadMoreCharacters();
    }
  });

  return (
    <Flex wrap="wrap">
      {characters.map((char) => (
        <CharacterCard key={char.name} {...char} />
      ))}
      {hasMore && <Spinner ref={ref} />}
    </Flex>
  );
}
