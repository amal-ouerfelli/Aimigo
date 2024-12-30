// src/hooks/useFruits.ts
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { Fruit, PaginatedData } from '../types/types';  // Import du type Fruit

// Fonction de récupération des fruits avec pagination
const fetchFruits = async ({ pageParam = 1 }): Promise<PaginatedData> => {
  const response = await fetch(`https://www.fruityvice.com/api/fruit/all?page=${pageParam}`);
  const data: PaginatedData = await response.json();
  return data;
};


const useFruits = ({ navigation }: any) => {
    const {
      data,
      fetchNextPage,
      hasNextPage,
      isLoading,
      isFetchingNextPage,
      isError,
      error,
    } = useInfiniteQuery({
      queryKey: ['fruits'],
      queryFn: fetchFruits,
      getNextPageParam: (lastPage) => (lastPage.hasNextPage ? lastPage.nextPage : false),
    })
