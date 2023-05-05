import { NavLink, Image, Group, Skeleton, Text, Box } from "@mantine/core";
import useGenres, { Genre } from "../hooks/useGenres";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, error, isLoading } = useGenres();
  const count = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  if (error) return null;
  return (
    <Box mt={12}>
      <Text fz="sm" fw={700}>
        Genres
      </Text>
      {isLoading
        ? count.map((c) => (
            <Group key={c} spacing={16} p="xs">
              <Skeleton width={28} height={28} />
              <Skeleton height={18} width="75%" />
            </Group>
          ))
        : data?.map((genre) => (
            <NavLink
              sx={{ borderRadius: 8 }}
              active={selectedGenre?.id === genre.id}
              key={genre.id}
              label={genre.name}
              icon={
                <Image
                  sx={{
                    borderRadius: 5,
                    overflow: "hidden",
                    objectFit: "cover",
                  }}
                  width={28}
                  height={28}
                  src={genre.image_background}
                />
              }
              onClick={() => onSelectGenre(genre)}
            />
          ))}
    </Box>
  );
};

export default GenreList;
