'use server';

import { ICharacter, ICharactersResponse } from '@/types/character';
import { notFound } from 'next/navigation';

export async function fetchCharacters(
  pageNumber?: number,
): Promise<ICharactersResponse> {
  try {
    return await fetch(
      pageNumber
        ? `${process.env.API_CHARACTER_URL}?page=${pageNumber}`
        : `${process.env.API_CHARACTER_URL}`,
      {
        method: 'GET',
      },
    ).then((res) => {
      if (res.ok) {
        return res.json();
      }
    });
  } catch (error) {
    throw new Error('Error fetching characters');
  }
}

export async function fetchSingleCharacter(id: number): Promise<ICharacter> {
  return await fetch(process.env.API_CHARACTER_URL + `${id}`, {
    method: 'GET',
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    if (!res.ok) {
      return notFound();
    }
  });
}
