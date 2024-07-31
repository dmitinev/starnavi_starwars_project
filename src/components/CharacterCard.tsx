import { Card, CardBody, GridItem, Text } from '@chakra-ui/react';
import Link from 'next/link';

/**
 * Renders a character card component.
 *
 * @component
 * @param {string} props.name - The name of the character.
 * @param {number} props.id - The ID of the character.
 * @returns {JSX.Element} The character card component.
 */
export default function CharacterCard({
  name,
  id,
}: Readonly<{
  name: string;
  id: number;
}>) {
  return (
    <GridItem
      data-testid="character-card"
      border="none"
      className="cardCharacterCard"
      borderRadius="5"
    >
      <Link href={`/character/${id}`}>
        <Card bgColor="orange" minH="400" borderRadius="5">
          <CardBody
            display="flex"
            flexDirection="column"
            justifyContent="center"
          >
            <Text fontSize={25} textAlign="center">
              {name}
            </Text>
          </CardBody>
        </Card>
      </Link>
    </GridItem>
  );
}
