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

/**
 * Renders the CharacterFlow component.
 *
 * @param nodesArray - The array of React Flow nodes.
 * @param edgesArray - The array of React Flow edges.
 * @returns {JSX.Element} The rendered CharacterFlow component.
 */
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
    // setting nodes and edges with the elements returned from getPlacedElements function
    const { nodes: placedNodes, edges: placedEdges } = getPlacedElements(
      nodesArray,
      edgesArray,
    );
    setNodes(placedNodes as Node[]);
    setEdges(placedEdges);
  }, []);

  return (
    // Container should have defined width and height to display ReactFlow properly
    <Flex w="100%" h="90%">
      <ReactFlow
        data-testid="characterFlow"
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
