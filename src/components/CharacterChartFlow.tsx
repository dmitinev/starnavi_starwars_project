'use client';

import FlowCustomCharacterNode from '@/components/FlowCustomCharacterNode';
import FlowCustomFilmNode from '@/components/FlowCustomFilmNode';
import FlowCustomShipNode from '@/components/FlowCustomShipNode';
import { getPlacedElements } from '@/utils/makeFlowNodesAutolayout';
import {
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
    <div style={{ width: '100%', height: '100%' }}>
      <ReactFlow nodes={nodes} edges={edges} fitView nodeTypes={nodeTypes} />
    </div>
  );
}

