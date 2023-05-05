import { Select } from "@mantine/core";
import usePlatforms, { Platform } from "../hooks/usePlatforms";

interface Props {
  onSelectPlatform: (id: Platform | null) => void;
}

const PlatformSelector = ({ onSelectPlatform }: Props) => {
  const { data } = usePlatforms();

  const platforms = data?.map((platform) => ({
    value: `${platform.id}`,
    label: platform.name,
  }));

  return (
    <Select
      sx={{ width: "45%" }}
      label="Platforms"
      placeholder="Select Platform"
      data={platforms ? [...platforms] : []}
      onChange={(id) =>
        onSelectPlatform(
          data?.find((platform) => platform.id === parseInt(id as string)) ||
            null
        )
      }
    />
  );
};
export default PlatformSelector;
