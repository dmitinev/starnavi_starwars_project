'use server';

import { ICharactersResponse } from '@/types/character';

export async function fetchCharacters(
  pageNumber: number,
): Promise<ICharactersResponse> {
  const data: ICharactersResponse = await fetch(
    process.env.API_CHARACTER_URL + `?page=${pageNumber}`,
    { method: 'GET' },
  ).then((res) => res.json());
  return data;
}
