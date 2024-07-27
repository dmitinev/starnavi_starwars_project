'use client';

import FlowCustomCharacterNode from '@/components/FlowCustomCharacterNode';
import FlowCustomFilmNode from '@/components/FlowCustomFilmNode';
import FlowCustomShipNode from '@/components/FlowCustomShipNode';
import { getPlacedElements } from '@/utils/makeFlowNodesAutolayout';
import { Flex } from '@chakra-ui/react';
import {
  Controls,
  Edge,
  Node,
  ReactFlow,
  useEdgesState,
  useNodesState,
} from '@xyflow/react';

const nodeTypes = {
  FlowCustomCharacterNode: FlowCustomCharacterNode,
  FlowCustomFilmNode: FlowCustomFilmNode,
  FlowCustomShipNode: FlowCustomShipNode,
};

export default function CharacterChartFlow({
  nodesArray,
  edgesArray,
}: {
  nodesArray: Node[];
  edgesArray: Edge[];
}) {
  const { nodes: placedNodes, edges: placedEdges } = getPlacedElements(
    nodesArray,
    edgesArray,
  );
  const [nodes] = useNodesState(placedNodes as Node[]);
  const [edges] = useEdgesState(placedEdges);

  return (
    <Flex w="100%" h="90%" m="auto 0">
      <ReactFlow
        draggable={false}
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        nodesDraggable={false}
      >
        <Controls />
      </ReactFlow>
    </Flex>
  );
}
