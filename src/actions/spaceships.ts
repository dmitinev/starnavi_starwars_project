'use server';

import { IShip } from '@/types/ship';

export async function fetchSingleSpaceship(id: number): Promise<IShip> {
  return await fetch(process.env.API_SHIPS_URL + `${id}`, {
    method: 'GET',
  }).then((res) => res.json());
}
