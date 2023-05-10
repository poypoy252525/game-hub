import { Box, Grid, Group, MediaQuery } from "@mantine/core";
import GenreList from "../components/GenreList";
import GameGrid from "../components/GameGrid";
import GameHeading from "../components/GameHeading";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";

const Index = () => {
  return (
    <Box p={16}>
      <Grid>
        <MediaQuery smallerThan="md" styles={{ display: "none" }}>
          <Grid.Col md={3} lg={2}>
            <GenreList />
          </Grid.Col>
        </MediaQuery>
        <Grid.Col md={9} lg={10}>
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
