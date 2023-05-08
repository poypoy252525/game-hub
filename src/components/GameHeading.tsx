import { Title } from "@mantine/core";
import { GameQuery } from "./../App";
import usePlatforms from "../hooks/usePlatforms";
import useGenres from "../hooks/useGenres";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: platforms } = usePlatforms();
  const platform = platforms?.results.find(
    (platform) => platform.id === gameQuery.platformId
  );
  const { data: genres } = useGenres();
  const genre = genres?.results.find((genre) => genre.id === gameQuery.genreId);
  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Title order={1} my={5}>
      {heading}
    </Title>
  );
};

export default GameHeading;
