'use client';
import { CharacterNode } from '@/types/reactFlowNodes';
import { Avatar, Box, Flex, Text, WrapItem } from '@chakra-ui/react';
import { Handle, NodeProps, Position } from '@xyflow/react';

export default function FlowCustomCharacterNode({
  data: { name },
}: NodeProps<CharacterNode>) {
  return (
    <Box
      bg="white"
      p={1}
      border="1px solid gray"
      padding="10px"
      borderRadius="8px"
    >
      <Flex direction="row" gap="10px" alignItems="center">
        <WrapItem>
          <Avatar size="md" />
        </WrapItem>
        <WrapItem>
          <Text fontWeight="bold">{name}</Text>
        </WrapItem>
      </Flex>
      <Handle type="source" position={Position.Bottom} />
    </Box>
  );
}
