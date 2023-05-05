import { AppShell, Group } from "@mantine/core";
import NavBar from "./components/NavBar";
import TopBar from "./components/TopBar";
import GameGrid from "./components/GameGrid";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortBy: string | null;
  search: string | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    <AppShell
      navbarOffsetBreakpoint="md"
      padding="md"
      navbar={
        <NavBar
          onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          selectedGenre={gameQuery.genre}
        />
      }
      header={
        <TopBar
          onSearchSubmit={(search) => setGameQuery({ ...gameQuery, search })}
        />
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      <GameHeading gameQuery={gameQuery} />
      <Group mb="md" noWrap>
        <PlatformSelector
          onSelectPlatform={(platform) =>
            setGameQuery({ ...gameQuery, platform })
          }
        />
        <SortSelector
          onSelectSortBy={(sortBy) => setGameQuery({ ...gameQuery, sortBy })}
        />
      </Group>

      <GameGrid gameQuery={gameQuery} />
    </AppShell>
  );
}

export default App;
