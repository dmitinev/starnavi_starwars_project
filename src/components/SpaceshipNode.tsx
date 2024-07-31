'use client';
import { ShipNodeType } from '@/types/reactFlowNodes';
import { Box, Flex, Text } from '@chakra-ui/react';
import { Handle, NodeProps, Position } from '@xyflow/react';
import { GiSpaceship } from 'react-icons/gi';

/**
 * Renders a spaceship node.
 *
 * @component
 * @param {string} props.data.name - The name of the spaceship.
 * @returns {JSX.Element} The rendered spaceship node.
 */
export default function SpaceshipNode({
  data: { name },
}: NodeProps<ShipNodeType>) {
  return (
    <Box
      bg="white"
      p={1}
      border="1px solid gray"
      w="auto"
      h="auto"
      borderRadius="8px"
    >
      <Flex
        bg="white"
        flexDir="column"
        gap="5px"
        justifyContent="center"
        alignItems="center"
        borderRadius="8px"
      >
        <GiSpaceship data-testid="testSpaceshipIcon" size="30px" />
        <Text fontWeight="bold">&quot;{name}&quot;</Text>
      </Flex>
      <Handle type="target" position={Position.Top} />
    </Box>
  );
}
