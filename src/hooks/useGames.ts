import { useInfiniteQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import useGameQueryStore from "../stores/gameQueryStore";
import { Game } from "../entities/Game";

const apiClient = new APIClient<Game>("/games");

const useGames = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);
  return useInfiniteQuery({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          parent_platforms: gameQuery.platformId,
          search: gameQuery.search,
          genres: gameQuery.genreId,
          ordering: gameQuery.sortBy,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: 24 * 60 * 60 * 1000,
  });
};
export default useGames;
