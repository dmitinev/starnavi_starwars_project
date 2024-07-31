'use client';
import { fetchCharacters } from '@/actions/characters';
import CharacterCard from '@/components/CharacterCard';
import { removeDuplicateObjects } from '@/helpers/removeDuplicateObjects';
import { ICharacter } from '@/types/character';
import { Container, Grid, Spinner } from '@chakra-ui/react';
import Error from 'next/error';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

/**
 * InfiniteScroll component that displays a grid of character cards and loads more characters when scrolled to the bottom.
 *
 * @param initialChars - The initial characters array to display in the grid.
 */
export default function InfiniteScroll({
  initialChars,
}: Readonly<{
  initialChars: ICharacter[];
}>) {
  // State receives the initial characters array from the parent page where it is fetched first time.
  const [characters, setCharacters] = useState<ICharacter[]>(initialChars);

  // State to keep track of the current page number.
  const [page, setPage] = useState<number>(1);

  // State to keep track of whether there are more characters to load from the API.
  const [hasMore, setHasMore] = useState<boolean>(true);

  // Intersection Observer hook to detect when the loading spinner is in view.
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
    // if loading spinner is in view, load more characters from the API.
    if (inView) {
      loadMoreCharacters();
    }
  });

  // If there are no characters were received for some reason, show an error page.
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
