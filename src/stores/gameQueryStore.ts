import { create } from "zustand";

interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortBy?: string;
  search?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setGenreId: (genreId?: number) => void;
  setPlatformId: (platformId?: number) => void;
  setSearchText: (searchText?: string) => void;
  setSortBy: (sort: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  setGenreId: (genreId) =>
    set((store) => ({
      gameQuery: { ...store.gameQuery, genreId },
    })),
  setPlatformId: (platformId) =>
    set((store) => ({
      gameQuery: { ...store.gameQuery, platformId },
    })),
  setSearchText: (searchText) =>
    set(() => ({
      gameQuery: { search: searchText },
    })),
  setSortBy: (sort) =>
    set((store) => ({
      gameQuery: { ...store.gameQuery, sortBy: sort },
    })),
}));

export default useGameQueryStore;
