'use client';
import { FilmNode } from '@/types/reactFlowNodes';
import { Box, Flex, Text } from '@chakra-ui/react';
import { Handle, NodeProps, Position } from '@xyflow/react';
import { ImFilm } from 'react-icons/im';

export default function FlowCustomFilmNode({
  data: { name },
}: NodeProps<FilmNode>) {
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
        <ImFilm size="30px" />
        <Text fontWeight="bold" fontStyle="bold">
          {name}
        </Text>
      </Flex>
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
    </Box>
  );
}
