import { Select } from "@mantine/core";
import usePlatforms, { Platform } from "../hooks/usePlatforms";

interface Props {
  onSelectPlatform: (id: Platform | null) => void;
}

const PlatformSelector = ({ onSelectPlatform }: Props) => {
  const { data } = usePlatforms();

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
      onChange={(id) =>
        onSelectPlatform(
          data?.results.find(
            (platform) => platform.id === parseInt(id as string)
          ) || null
        )
      }
    />
  );
};
export default PlatformSelector;
