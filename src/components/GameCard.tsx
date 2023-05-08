import { Badge, Card, Group, Image, Rating, Text } from "@mantine/core";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import getCroppedImageURL from "../services/image-url";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card shadow="sm" sx={{ borderRadius: 12, height: "100%" }}>
      <Card.Section>
        <Image
          sx={{ objectFit: "cover" }}
          alt={game.name}
          height={200}
          src={getCroppedImageURL(game.background_image)}
        />
      </Card.Section>
      <Group noWrap position="apart" mt="lg">
        <PlatformIconList
          platforms={game.parent_platforms.map(
            (parentPlatform) => parentPlatform.platform
          )}
        />
        <Badge>{game.metacritic}</Badge>
      </Group>
      <Text fw={500} fz={"xl"}>
        {game.name}
      </Text>
      <Group spacing="sm">
        <Rating value={game.rating} size="xs" readOnly fractions={4} />
        <Text fz="sm">{game.rating}</Text>
      </Group>
    </Card>
  );
};

export default GameCard;
