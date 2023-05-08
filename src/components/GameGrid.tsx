import { Button, Grid } from "@mantine/core";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { GameQuery } from "./../App";
import React from "react";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading, isFetchingNextPage, fetchNextPage } =
    useGames(gameQuery);
  const gameSkeletonCount = [1, 2, 3, 4, 5, 6];
  if (error) return null;
  return (
    <>
      <Grid>
        {isLoading
          ? gameSkeletonCount.map((count) => (
              <Grid.Col xs={12} sm={6} lg={4} xl={3} key={count}>
                <GameCardSkeleton />
              </Grid.Col>
            ))
          : data?.pages.map((games, index) => (
              <React.Fragment key={index}>
                {games.results.map((game) => (
                  <Grid.Col xs={12} sm={6} lg={4} xl={3} key={game.id}>
                    <GameCard game={game} />
                  </Grid.Col>
                ))}
              </React.Fragment>
            ))}
      </Grid>
      <Button disabled={isFetchingNextPage} onClick={() => fetchNextPage()}>
        {isFetchingNextPage ? "Loading..." : "Load more"}
      </Button>
    </>
  );
};

export default GameGrid;
