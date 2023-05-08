import { AppShell, Group } from "@mantine/core";
import NavBar from "./components/NavBar";
import TopBar from "./components/TopBar";
import GameGrid from "./components/GameGrid";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortBy?: string;
  search?: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    <AppShell
      navbarOffsetBreakpoint="md"
      padding="md"
      navbar={
        <NavBar
          onSelectGenre={(genre) =>
            setGameQuery({ ...gameQuery, genreId: genre.id })
          }
          selectedGenre={gameQuery.genreId}
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
            setGameQuery({ ...gameQuery, platformId: platform?.id })
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
