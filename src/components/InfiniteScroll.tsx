'use client';
import { fetchCharacters } from '@/actions/characters';
import CharacterCard from '@/components/CharacterCard';
import { removeDuplicateObjects } from '@/helpers/removeDuplicateObjects';
import { ICharacter } from '@/types/character';
import { Container, Grid, Spinner } from '@chakra-ui/react';
import Error from 'next/error';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export default function InfiniteScroll({
  initialChars,
}: Readonly<{
  initialChars: ICharacter[];
}>) {
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

  if (!characters.length) {
    return <Error statusCode={400} title="Whoops, error has happened!" />;
  }

  return (
    <Container maxW="container.xl" py={15} textAlign="center">
      <Grid
        h="100%"
        templateRows="auto"
        templateColumns="repeat(auto-fit, minmax(300px, 1fr))"
        gap="20px"
      >
        {characters.map((char) => (
          <CharacterCard key={char.name} {...char} />
        ))}
      </Grid>
      {hasMore && (
        <Spinner data-testid="spinner" size="xl" color="orange" ref={ref} />
      )}
    </Container>
  );
}
