import { useParams } from "react-router-dom";
import useGameDetails from "../hooks/useGameDetails";
import {
  Title,
  Text,
  Box,
  Spoiler,
  Badge,
  MediaQuery,
  SimpleGrid,
} from "@mantine/core";
import DefinitionItem from "./../components/DefinitionItem";
import GameTrailer from "./../components/GameTrailer";
import GameScreenshot from "./../components/GameScreenshot";

const GameDetails = () => {
  const params = useParams();
  const { data: game } = useGameDetails(parseInt(params.id!));
  return (
    <MediaQuery smallerThan="md" styles={{ padding: 12 }}>
      <Box p={70}>
        <SimpleGrid
          spacing={60}
          breakpoints={[
            { maxWidth: "xs", cols: 1 },
            { minWidth: "md", cols: 2 },
          ]}
        >
          <Box>
            <MediaQuery
              smallerThan="md"
              styles={{ fontSize: 32, textAlign: "center" }}
            >
              <Title fz={70} order={1} mb={12}>
                {game?.name}
              </Title>
            </MediaQuery>
            <Title order={3}>About</Title>
            <Spoiler maxHeight={120} hideLabel="hide" showLabel="show more">
              <Text>{game?.description_raw}</Text>
            </Spoiler>
            <SimpleGrid mt={24} cols={2}>
              <DefinitionItem heading="Platforms">
                {game?.parent_platforms.map(({ platform }) => (
                  <Text component="span" key={platform.id}>
                    {` ${platform.name},`}
                  </Text>
                ))}
              </DefinitionItem>
              <DefinitionItem heading="Metascore">
                <Badge>{game?.metacritic}</Badge>
              </DefinitionItem>

              <DefinitionItem heading="Genres">
                {game?.genres.map((genre) => (
                  <Text key={genre.id}>{genre.name}</Text>
                ))}
              </DefinitionItem>

              <DefinitionItem heading="Release date">
                {game?.released}
              </DefinitionItem>

              <DefinitionItem heading="Publishers">
                {game?.publishers.map((publisher) => (
                  <Text key={publisher.id}>{publisher.name}</Text>
                ))}
              </DefinitionItem>
            </SimpleGrid>
          </Box>
          <Box>
            <GameTrailer gameId={game?.id!} />
            <GameScreenshot gameId={game?.id!} />
          </Box>
        </SimpleGrid>
      </Box>
    </MediaQuery>
  );
};

export default GameDetails;
