import useGameTrailer from "../hooks/useGameTrailer";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data: trailer } = useGameTrailer(gameId);

  const first = trailer?.results[0];
  if (!first) return null;
  return (
    <video width="100%" src={first.data.max} poster={first.preview} controls />
  );
};

export default GameTrailer;
