import { Title } from "@mantine/core";
import { GameQuery } from "./../App";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;
  return (
    <Title order={1} my={5}>
      {heading}
    </Title>
  );
};

export default GameHeading;
