import { useParams } from "react-router-dom";
import useGameDetails from "../hooks/useGameDetails";
import { Title, Text, Box, Spoiler, Grid, Badge } from "@mantine/core";
import DefinitionItem from "./../components/DefinitionItem";
import GameTrailer from "./../components/GameTrailer";

const GameDetails = () => {
  const params = useParams();
  const { data: game } = useGameDetails(parseInt(params.id!));
  return (
    <Grid>
      <Grid.Col md={6}>
        <Box p={70}>
          <Box mb={40}>
            <Title fz={70} order={1} mb={12}>
              {game?.name}
            </Title>
            <Title order={3}>About</Title>
            <Spoiler maxHeight={120} hideLabel="hide" showLabel="show more">
              <Text>{game?.description_raw}</Text>
            </Spoiler>
          </Box>
          <Grid>
            <Grid.Col xs={12} md={6}>
              <DefinitionItem heading="Platforms">
                {game?.parent_platforms.map(({ platform }) => (
                  <Text component="span" key={platform.id}>
                    {` ${platform.name},`}
                  </Text>
                ))}
              </DefinitionItem>
            </Grid.Col>
            <Grid.Col xs={12} md={6}>
              <DefinitionItem heading="Metascore">
                <Badge>{game?.metacritic}</Badge>
              </DefinitionItem>
            </Grid.Col>
            <Grid.Col xs={12} md={6}>
              <DefinitionItem heading="Genres">
                {game?.genres.map((genre) => (
                  <Text key={genre.id}>{genre.name}</Text>
                ))}
              </DefinitionItem>
            </Grid.Col>
            <Grid.Col xs={12} md={6}>
              <DefinitionItem heading="Release date">
                {game?.released}
              </DefinitionItem>
            </Grid.Col>
            <Grid.Col xs={12} md={6}>
              <DefinitionItem heading="Publishers">
                {game?.publishers.map((publisher) => (
                  <Text key={publisher.id}>{publisher.name}</Text>
                ))}
              </DefinitionItem>
            </Grid.Col>
          </Grid>
        </Box>
      </Grid.Col>
      <Grid.Col md={6}>
        <GameTrailer gameId={game?.id!} />
      </Grid.Col>
    </Grid>
  );
};

export default GameDetails;
