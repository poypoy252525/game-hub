import { Box, Grid, Loader } from "@mantine/core";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const GameGrid = () => {
  const { data, error, isLoading, fetchNextPage, hasNextPage } = useGames();
  const gameSkeletonCount = [1, 2, 3, 4, 5, 6];
  if (error) return null;

  const dataLengthCount =
    data?.pages.reduce((total, page) => page.results.length + total, 0) || 0;

  return (
    <>
      <InfiniteScroll
        loader={<Loader w={"100%"} my={45} />}
        hasMore={!!hasNextPage}
        next={() => fetchNextPage()}
        dataLength={dataLengthCount}
        style={{ overflow: "hidden" }}
      >
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
                      <Box>
                        <GameCard game={game} />
                      </Box>
                    </Grid.Col>
                  ))}
                </React.Fragment>
              ))}
        </Grid>
      </InfiniteScroll>
    </>
  );
};

export default GameGrid;
