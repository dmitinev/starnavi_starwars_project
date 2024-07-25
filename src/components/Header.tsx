import { Box, Container, Flex } from '@chakra-ui/react';
import Image from 'next/image';

export default function Header() {
  return (
    <Box as="header">
      <Container maxW="100%" bgColor="#000000" px="30">
        <Flex justifyContent="center">
          <Image width={50} height={50} src="/sw_logo.png" alt="Logo" />
        </Flex>
      </Container>
    </Box>
  );
}
