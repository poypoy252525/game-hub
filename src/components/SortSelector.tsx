import { Select } from "@mantine/core";

interface Props {
  onSelectSortBy: (value: string | null) => void;
}

const SortSelector = ({ onSelectSortBy }: Props) => {
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
      onChange={(value) => onSelectSortBy(value)}
      label="Sort by:"
      data={sortItem}
      defaultValue=""
    />
  );
};

export default SortSelector;
