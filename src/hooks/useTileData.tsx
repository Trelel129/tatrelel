import useSWR from 'swr';

import fetcher from '@/lib/fetcher';

import { TileData } from '@/pages/surga/tiledata';

const useTileData = () => {
  const url = `/tileData`;
  const indexId = ''; // Declare the variable 'indexId' here or assign it a value if needed

  const {
    data: users,
    mutate,
    isLoading,
  } = useSWR<TileData[]>(indexId ? url : null, fetcher);

  return { users: users || [], mutate, isLoading };
};

export default useTileData;
