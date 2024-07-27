'use server';

import { IFilm } from '@/types/film';

export async function fetchSingleFilm(id: number): Promise<IFilm> {
  return await fetch(process.env.API_FILMS_URL + `${id}`, {
    method: 'GET',
  }).then((res) => res.json());
}
