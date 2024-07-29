'use server';

import { IShip } from '@/types/ship';

export async function fetchSingleSpaceship(id: number): Promise<IShip> {
  try {
    return await fetch(process.env.API_SHIPS_URL + `${id}`, {
      method: 'GET',
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
    });
  } catch (error) {
    throw new Error('Error fetching spaceship - ' + id);
  }
}
