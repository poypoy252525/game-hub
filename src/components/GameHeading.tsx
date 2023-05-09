import { Title } from "@mantine/core";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";
import useGameQueryStore from "../stores/gameQueryStore";

const GameHeading = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);

  const platform = usePlatform(platformId);
  const genre = useGenre(genreId);
  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Title order={1} my={5}>
      {heading}
    </Title>
  );
};

export default GameHeading;
