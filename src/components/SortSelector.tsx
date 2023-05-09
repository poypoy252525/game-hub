import { Select } from "@mantine/core";
import useGameQueryStore from "../stores/gameQueryStore";

const SortSelector = () => {
  const setSortBy = useGameQueryStore((s) => s.setSortBy);
  const sortItem = [
    { value: "", label: "Relevance" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Released" },
    { value: "-added", label: "Added" },
    { value: "-created", label: "Created" },
    { value: "-rating", label: "Rating" },
    { value: "-metacritic", label: "Popularity" },
  ];
  return (
    <Select
      sx={{ maxWidth: 250 }}
      onChange={(value) => setSortBy(value as string)}
      label="Sort by:"
      data={sortItem}
      defaultValue=""
    />
  );
};

export default SortSelector;
