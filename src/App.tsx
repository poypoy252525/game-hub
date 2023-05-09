import { AppShell, Group } from "@mantine/core";
import NavBar from "./components/NavBar";
import TopBar from "./components/TopBar";
import GameGrid from "./components/GameGrid";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

function App() {
  return (
    <AppShell
      navbarOffsetBreakpoint="md"
      padding="md"
      navbar={<NavBar />}
      header={<TopBar />}
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      <GameHeading />
      <Group mb="md" noWrap>
        <PlatformSelector />
        <SortSelector />
      </Group>

      <GameGrid />
    </AppShell>
  );
}

export default App;
