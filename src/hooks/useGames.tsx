import { useInfiniteQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { Platform } from "./usePlatforms";
import APIClient from "../services/api-client";

const apiClient = new APIClient<Game>("/games");

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  rating: number;
  metacritic: number;
}

const useGames = (gameQuery: GameQuery) =>
  useInfiniteQuery({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          parent_platforms: gameQuery.platform?.id,
          search: gameQuery.search,
          genres: gameQuery.genre?.id,
          ordering: gameQuery.sortBy,
          page: pageParam,
          page_size: 40,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return allPages.length + 1;
    },
  });

export default useGames;
