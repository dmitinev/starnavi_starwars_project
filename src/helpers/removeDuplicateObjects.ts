import { ICharacter } from '@/types/character';

export const removeDuplicateObjects = (arr: ICharacter[]) => {
  return arr.filter((v, i, a) => a.findIndex((t) => t.id === v.id) === i);
};
