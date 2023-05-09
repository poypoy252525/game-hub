import { Select } from "@mantine/core";
import usePlatforms from "../hooks/usePlatforms";
import useGameQueryStore from "../stores/gameQueryStore";

const PlatformSelector = () => {
  const { data } = usePlatforms();
  const setPlatformId = useGameQueryStore((s) => s.setPlatformId);

  const platforms = data?.results.map((platform) => ({
    value: `${platform.id}`,
    label: platform.name,
  }));

  return (
    <Select
      sx={{ width: 250 }}
      label="Platforms"
      data={
        platforms
          ? [{ value: "", label: "All platforms" }, ...platforms]
          : [{ value: "", label: "All platforms" }]
      }
      defaultValue=""
      onChange={(id) => {
        setPlatformId(parseInt(id as string) || undefined);
      }}
    />
  );
};
export default PlatformSelector;
