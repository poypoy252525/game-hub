import { Grid } from "@mantine/core";
import useScreenShots from "../hooks/useScreenshots";

interface Props {
  gameId: number;
}

const GameScreenshot = ({ gameId }: Props) => {
  const { data } = useScreenShots(gameId);
  if (!data) return null;
  return (
    <Grid>
      {data.results.map((ss) => (
        <Grid.Col key={ss.id} md={6}>
          <img src={ss.image} width="100%" style={{ borderRadius: 10 }} />
        </Grid.Col>
      ))}
    </Grid>
  );
};

export default GameScreenshot;
