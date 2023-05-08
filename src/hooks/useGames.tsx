import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { Platform } from "./usePlatforms";
import apiClient, { FetchResponse } from "../services/api-client";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  rating: number;
  metacritic: number;
}

const useGames = (gameQuery: GameQuery) =>
  useQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Game>>("/games", {
          params: {
            parent_platforms: gameQuery.platform?.id,
            search: gameQuery.search,
            genres: gameQuery.genre?.id,
            ordering: gameQuery.sortBy,
          },
        })
        .then((res) => res.data),
  });

export default useGames;
