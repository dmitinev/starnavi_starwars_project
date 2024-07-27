'use server';

import { ICharacter, ICharactersResponse } from '@/types/character';

export async function fetchCharacters(
  pageNumber?: number,
): Promise<ICharactersResponse> {
  return await fetch(
    pageNumber
      ? `${process.env.API_CHARACTER_URL}?page=${pageNumber}`
      : `${process.env.API_CHARACTER_URL}`,
    {
      method: 'GET',
    },
  ).then((res) => res.json());
}

export async function fetchSingleCharacter(id: number): Promise<ICharacter> {
  return await fetch(process.env.API_CHARACTER_URL + `${id}`, {
    method: 'GET',
  }).then((res) => res.json());
}
