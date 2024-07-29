'use server';

import { IFilm } from '@/types/film';

export async function fetchSingleFilm(id: number): Promise<IFilm> {
  try {
    return await fetch(process.env.API_FILMS_URL + `${id}`, {
      method: 'GET',
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
    });
  } catch (error) {
    throw new Error('Error fetching film - ' + id);
  }
}
