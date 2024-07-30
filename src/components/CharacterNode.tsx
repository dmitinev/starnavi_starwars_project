'use client';
import { CharacterNodeType } from '@/types/reactFlowNodes';
import { Avatar, Box, Flex, Text, WrapItem } from '@chakra-ui/react';
import { Handle, NodeProps, Position } from '@xyflow/react';

export default function CharacterNode({
  data: { name },
}: NodeProps<CharacterNodeType>) {
  return (
    <Box
      bg="white"
      p={1}
      border="1px solid gray"
      padding="10px"
      borderRadius="8px"
      data-testid="characterNode"
    >
      <Flex direction="row" gap="10px" alignItems="center">
        <WrapItem>
          <Avatar data-testid="testAvatar" size="md" />
        </WrapItem>
        <WrapItem>
          <Text data-testid="targetText" fontWeight="bold">
            {name}
          </Text>
        </WrapItem>
      </Flex>
      <Handle type="source" position={Position.Bottom} />
    </Box>
  );
}
