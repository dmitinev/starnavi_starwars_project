import { Node } from '@xyflow/react';

export type CharacterNode = Node<{ name: string }, 'char'>;
export type FilmNode = Node<{ name: string }, 'film'>;
export type ShipNode = Node<{ name: string; model: string }, 'ship'>;

