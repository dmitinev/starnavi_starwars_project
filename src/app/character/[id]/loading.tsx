import { Flex, Spinner } from '@chakra-ui/react';

export default function LoadingCharacterPage() {
  return (
    <Flex minH="100%" minW="100%" justifyContent="center" alignItems="center">
      <Spinner size="xl" color="orange" />
    </Flex>
  );
}
