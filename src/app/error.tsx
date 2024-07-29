'use client';

import { Button, Flex, Text } from '@chakra-ui/react';

export default function CharacterErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const resetHandler = () => {
    reset();
  };
  return (
    <Flex
      minH="100%"
      minW="100%"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Text fontSize="40px" fontWeight="bold">
        Whoops, error has happened!
      </Text>
      <Flex gap="20px">
        <Button onClick={resetHandler} marginTop="15px" colorScheme="yellow">
          Try to reload
        </Button>
      </Flex>
    </Flex>
  );
}
