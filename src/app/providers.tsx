'use client';
import { ChakraProvider } from '@chakra-ui/react';
import { ReactNode } from 'react';

// extra providers can be added here for the app
export function Providers({ children }: { children: ReactNode }) {
  return <ChakraProvider>{children}</ChakraProvider>;
}
