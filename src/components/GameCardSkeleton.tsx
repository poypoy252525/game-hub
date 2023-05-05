import { Card, Skeleton } from "@mantine/core";

const GameCardSkeleton = () => {
  return (
    <Card sx={{ borderRadius: 12 }}>
      <Card.Section>
        <Skeleton height={200} />
      </Card.Section>
      <Skeleton height={10} mt="md" />
      <Skeleton height={10} mt="xs" />
      <Skeleton height={10} mt="xs" width="70%" />
    </Card>
  );
};

export default GameCardSkeleton;
