'use client';

import CharacterNode from '@/components/CharacterNode';
import FilmNode from '@/components/FilmNode';
import FlowCustomShipNode from '@/components/SpaceshipNode';
import { getPlacedElements } from '@/helpers/makeFlowNodesAutolayout';
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
  FlowCustomCharacterNode: CharacterNode,
  FlowCustomFilmNode: FilmNode,
  FlowCustomShipNode: FlowCustomShipNode,
};

export default function CharacterFlow({
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
