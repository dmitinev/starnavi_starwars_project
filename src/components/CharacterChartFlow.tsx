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
import { useEffect } from 'react';

const nodeTypes = {
  FlowCustomCharacterNode: FlowCustomCharacterNode,
  FlowCustomFilmNode: FlowCustomFilmNode,
  FlowCustomShipNode: FlowCustomShipNode,
};

export default function CharacterChartFlow({
  nodesArray,
  edgesArray,
}: Readonly<{
  nodesArray: Node[];
  edgesArray: Edge[];
}>) {
  const [nodes, setNodes] = useNodesState<Node>([]);
  const [edges, setEdges] = useEdgesState<Edge>([]);

  useEffect(() => {
    const { nodes: placedNodes, edges: placedEdges } = getPlacedElements(
      nodesArray,
      edgesArray,
    );
    setNodes(placedNodes as Node[]);
    setEdges(placedEdges);
  }, []);

  return (
    <Flex w="100%" h="90%">
      <ReactFlow
        draggable={false}
        nodes={nodes}
        edges={edges}
        fitView
        nodeTypes={nodeTypes}
        nodesDraggable={false}
      >
        <Controls />
      </ReactFlow>
    </Flex>
  );
}
