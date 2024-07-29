import { Flex, Highlight, Text } from '@chakra-ui/react';

export default function NotFound() {
  return (
    <Flex
      h="100%"
      as="section"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="20px"
    >
      <Text color="orange" fontWeight="bold" fontSize="9xl">
        404
      </Text>
      <Text fontSize="30px">
        <Highlight
          query="You lost your own way my son..."
          styles={{
            px: '2',
            py: '1',
            rounded: 'md',
            bg: 'orange',
            color: 'white',
            fontWeight: 'bold',
          }}
        >
          You lost your own way my son...
        </Highlight>
      </Text>
    </Flex>
  );
}
