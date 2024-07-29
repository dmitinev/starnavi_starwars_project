'use server';

import { IShip } from '@/types/ship';
import { notFound } from 'next/navigation';

export async function fetchSingleSpaceship(id: number): Promise<IShip> {
  return await fetch(process.env.API_SHIPS_URL + `${id}`, {
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
