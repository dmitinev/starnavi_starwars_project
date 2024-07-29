import dagre from '@dagrejs/dagre';
import { Edge, Node } from '@xyflow/react';

export const NODEWIDTH = 160; //vertical margin between nodes
export const NODEHEIGHT = 100; // horizontal margin between nodes

const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));

export const getPlacedElements = (
  nodes: Node[],
  edges: Edge[],
  direction: string = 'TB',
) => {
  const isHorizontal = direction === 'LR';
  dagreGraph.setGraph({ rankdir: direction });

  nodes.forEach((node) => {
    dagreGraph.setNode(node.id, { width: NODEWIDTH, height: NODEHEIGHT });
  });

  edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target);
  });

  dagre.layout(dagreGraph);

  const newNodes = nodes.map((node) => {
    const nodeWithPosition = dagreGraph.node(node.id);
    return {
      ...node,
      targetPosition: isHorizontal ? 'left' : 'top',
      sourcePosition: isHorizontal ? 'right' : 'bottom',
      position: {
        x: nodeWithPosition.x - NODEWIDTH / 2,
        y: nodeWithPosition.y - NODEHEIGHT / 2,
      },
    };
  });

  return { nodes: newNodes, edges };
};
