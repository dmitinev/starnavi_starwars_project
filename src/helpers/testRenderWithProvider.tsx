import { ChakraProvider } from '@chakra-ui/react';
import { render, RenderOptions } from '@testing-library/react';
import { ReactFlowProvider } from '@xyflow/react';
import { ReactElement, ReactNode } from 'react';

const allProviders = ({ children }: { children: ReactNode }) => {
  return (
    <ChakraProvider>
      <ReactFlowProvider>{children}</ReactFlowProvider>
    </ChakraProvider>
  );
};

export const renderComponentWithProviders = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: allProviders, ...options });
