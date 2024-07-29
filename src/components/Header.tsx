import { Box, Container, Flex } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <Box as="header">
      <Container maxW="100%" bgColor="#000000" px="30">
        <Flex justifyContent="center">
          <Link href="/">
            <Image
              width={50}
              height={50}
              src="/sw_logo.png"
              alt="Logo"
              priority
            />
          </Link>
        </Flex>
      </Container>
    </Box>
  );
}
