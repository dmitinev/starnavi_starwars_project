import { ChakraProvider } from '@chakra-ui/react';
import { render, RenderOptions } from '@testing-library/react';
import { ReactFlowProvider } from '@xyflow/react';
import { ReactElement, ReactNode } from 'react';

/**
 * Wraps the given React component with all the necessary providers.
 *
 * @param children - The child components to be rendered.
 * @returns The wrapped component with project providers for test.
 */
const allProviders = ({ children }: { children: ReactNode }) => {
  return (
    // <ChakraProvider> is the provider for Chakra UI components.
    // <ReactFlowProvider> is the provider for the React Flow component.
    <ChakraProvider>
      <ReactFlowProvider>{children}</ReactFlowProvider>
    </ChakraProvider>
  );
};

/**
 * Renders a React component with the specified providers.
 *
 * @param ui - The React component to render.
 * @param options - Additional options for rendering.
 * @returns The rendered component for jest tests.
 */
export const renderComponentWithProviders = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: allProviders, ...options });
