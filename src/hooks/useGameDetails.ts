import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Game } from "../entities/Game";

const apiClient = new APIClient<Game>("/games");

const useGameDetails = (gameId: number) =>
  useQuery({
    queryKey: ["game", gameId],
    queryFn: () => apiClient.get(gameId),
  });

export default useGameDetails;
