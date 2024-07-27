'use server';

import { ICharacter, ICharactersResponse } from '@/types/character';

export async function fetchCharacters(
  pageNumber: number,
): Promise<ICharactersResponse> {
  const data: ICharactersResponse = await fetch(
    process.env.API_CHARACTER_URL + `?page=${pageNumber}`,
    { method: 'GET' },
  ).then((res) => res.json());
  return data;
}

export async function fetchSingleCharacter(id: number): Promise<ICharacter> {
  const data: ICharacter = await fetch(
    process.env.API_CHARACTER_URL + `${id}`,
    {
      method: 'GET',
    },
  ).then((res) => res.json());
  return data;
}
