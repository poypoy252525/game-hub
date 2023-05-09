import { Box, Navbar, ScrollArea } from "@mantine/core";
import GenreList from "./GenreList";

const NavBar = () => {
  return (
    <Navbar hiddenBreakpoint="md" hidden width={{ base: 200, md: 240 }}>
      <Box p="xs" component={ScrollArea}>
        <GenreList />
      </Box>
    </Navbar>
  );
};

export default NavBar;
