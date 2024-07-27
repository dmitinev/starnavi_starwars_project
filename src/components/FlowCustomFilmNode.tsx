'use client';
import { FilmNode } from '@/types/reactFlowNodes';
import { Box, Text } from '@chakra-ui/react';
import { Handle, NodeProps, Position } from '@xyflow/react';

export default function FlowCustomFilmNode({
  data: { name },
}: NodeProps<FilmNode>) {
  return (
    <Box>
      <Box bg="white" p={1} border="1px solid gray">
        <Text>{name}</Text>
      </Box>
      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />
    </Box>
  );
}
