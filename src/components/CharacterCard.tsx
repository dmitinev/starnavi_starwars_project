import { Card, CardBody, GridItem, Text } from '@chakra-ui/react';
import Link from 'next/link';

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
