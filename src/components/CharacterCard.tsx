import { Box, Card, CardBody, Text } from '@chakra-ui/react';
import Link from 'next/link';

export default function CharacterCard({
  name,
  id,
}: {
  name: string;
  id: number;
}) {
  return (
    <Box flexGrow={1} flexShrink={0}>
      <Link href={`/character/${id}`}>
        <Card maxW="400" bgColor="coral" minH="400">
          <CardBody>
            <Text textAlign="center">{name}</Text>
          </CardBody>
        </Card>
      </Link>
    </Box>
  );
}
