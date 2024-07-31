import dagre from '@dagrejs/dagre';
import { Edge, Node } from '@xyflow/react';

export const NODEWIDTH = 160; //vertical margin between nodes
export const NODEHEIGHT = 100; // horizontal margin between nodes

const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));

/**
 * Calculates the positions of nodes in a graph using the dagre layout algorithm.
 * @param nodes - An array of nodes in the graph.
 * @param edges - An array of edges in the graph.
 * @param direction - The direction of the graph layout. Defaults to 'TB' (top to bottom).
 * @returns An object containing the updated nodes and the original edges.
 */
export const getPlacedElements = (
  nodes: Node[],
  edges: Edge[],
  direction: string = 'TB', // direction of react flow nodes
) => {
  // Check if the graph is horizontal
  const isHorizontal = direction === 'LR';
  dagreGraph.setGraph({ rankdir: direction });

  // Add nodes to the graph
  nodes.forEach((node) => {
    dagreGraph.setNode(node.id, { width: NODEWIDTH, height: NODEHEIGHT });
  });

  // Add edges to the graph
  edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target);
  });

  // Calculate the layout of the graph
  dagre.layout(dagreGraph);

  // Update the nodes with the calculated positions
  const newNodes = nodes.map((node) => {
    const nodeWithPosition = dagreGraph.node(node.id);
    // Set the target and source positions based on the direction of the graph
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
