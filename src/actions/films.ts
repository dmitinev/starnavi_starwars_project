'use server';

import { IFilm } from '@/types/film';
import { notFound } from 'next/navigation';

export async function fetchSingleFilm(id: number): Promise<IFilm> {
  return await fetch(process.env.API_FILMS_URL + `${id}`, {
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
