import { useParams } from "react-router-dom";
import useGameDetails from "../hooks/useGameDetails";
import { Title, Text } from "@mantine/core";

const GameDetails = () => {
  const params = useParams();
  const { data } = useGameDetails(parseInt(params.id!));
  console.log(data?.name);
  return (
    <>
      <Title>{data?.name}</Title>
      <Text>{data?.description_raw}</Text>
    </>
  );
};

export default GameDetails;
