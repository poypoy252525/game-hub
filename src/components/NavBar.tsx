import { Box, Navbar, ScrollArea } from "@mantine/core";
import GenreList from "./GenreList";
import { Genre } from "../hooks/useGenres";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre?: number;
}

const NavBar = ({ onSelectGenre, selectedGenre }: Props) => {
  return (
    <Navbar hiddenBreakpoint="md" hidden width={{ base: 200, md: 240 }}>
      <Box p="xs" component={ScrollArea}>
        <GenreList
          selectedGenreId={selectedGenre}
          onSelectGenre={onSelectGenre}
        />
      </Box>
    </Navbar>
  );
};

export default NavBar;
