import useGameTrailer from "../hooks/useGameTrailer";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data: trailer, isLoading, error } = useGameTrailer(gameId);
  const first = trailer?.results[0];
  if (!first) return null;
  if (error) throw error;
  if (isLoading) return null;
  return (
    <video
      style={{ borderRadius: 12, marginBottom: 6 }}
      width="100%"
      src={first.data.max}
      poster={first.preview}
      controls
      muted
    />
  );
};

export default GameTrailer;
