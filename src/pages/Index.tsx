import { Box, Grid, Group } from "@mantine/core";
import GenreList from "../components/GenreList";
import GameGrid from "../components/GameGrid";
import GameHeading from "../components/GameHeading";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";

const Index = () => {
  return (
    <Box p={16}>
      <Grid>
        <Grid.Col md={2}>
          <GenreList />
        </Grid.Col>
        <Grid.Col md={10}>
          <GameHeading />
          <Group mb="md" noWrap>
            <PlatformSelector />
            <SortSelector />
          </Group>

          <GameGrid />
        </Grid.Col>
      </Grid>
    </Box>
  );
};

export default Index;
