import { Badge, Card, Group, Image, Rating, Text } from "@mantine/core";
import { Game } from "../entities/Game";
import PlatformIconList from "./PlatformIconList";
import getCroppedImageURL from "../services/image-url";
import { useNavigate } from "react-router-dom";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const navigate = useNavigate();
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
          platforms={game.parent_platforms?.map(
            (parentPlatform) => parentPlatform.platform
          )}
        />
        <Badge>{game.metacritic}</Badge>
      </Group>

      <Text
        sx={{ cursor: "pointer" }}
        onClick={() => navigate("/games/" + game.id)}
        fw={500}
        fz={"xl"}
      >
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
