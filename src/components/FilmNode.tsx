'use client';
import { FilmNodeType } from '@/types/reactFlowNodes';
import { Box, Flex, Text } from '@chakra-ui/react';
import { Handle, NodeProps, Position } from '@xyflow/react';
import { ImFilm } from 'react-icons/im';

/**
 * FilmNode component represents a node in the film graph.
 *
 * @param data.name - The name of the film.
 *
 * @returns The rendered FilmNode component.
 */
export default function FilmNode({ data: { name } }: NodeProps<FilmNodeType>) {
  return (
    <Box w="auto" h="auto">
      <Flex
        bg="white"
        p={1}
        border="1px solid gray"
        flexDir="column"
        gap="5px"
        justifyContent="center"
        alignItems="center"
        padding="10px"
        borderRadius="8px"
      >
        <ImFilm data-testid="filmIcon" size="30px" />
        <Text fontWeight="bold" fontStyle="bold">
          {name}
        </Text>
      </Flex>
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
    </Box>
  );
}
