import { ICharacter } from '@/types/character';

/**
 * Removes duplicate objects from an array based on a specific property.
 *
 * @param arr - The array of objects to remove duplicates from.
 * @returns A new array with duplicate objects removed.
 */
export const removeDuplicateObjects = (arr: ICharacter[]) => {
  // Remove duplicate objects based on the 'id' property
  return arr.filter((v, i, a) => a.findIndex((t) => t.id === v.id) === i);
};
