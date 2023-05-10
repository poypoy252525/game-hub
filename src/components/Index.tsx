import { Box, Grid, Group } from "@mantine/core";
import GenreList from "./GenreList";
import GameGrid from "./GameGrid";
import GameHeading from "./GameHeading";
import PlatformSelector from "./PlatformSelector";
import SortSelector from "./SortSelector";

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
