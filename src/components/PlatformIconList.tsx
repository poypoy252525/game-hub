import { Text, Group } from "@mantine/core";
import {
  FaWindows,
  FaPlaystation,
  FaAndroid,
  FaXbox,
  FaApple,
  FaLinux,
  FaAppStore,
  FaGlobe,
} from "react-icons/fa";
import { IconType } from "react-icons";
import { SiNintendo } from "react-icons/si";
import { Platform } from "../hooks/usePlatforms";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    android: FaAndroid,
    xbox: FaXbox,
    ios: FaAppStore,
    mac: FaApple,
    linux: FaLinux,
    web: FaGlobe,
    nintendo: SiNintendo,
  };
  return (
    <Group spacing="xs">
      {platforms.map((platform) => (
        <Text
          key={platform.id}
          fz={14}
          color="dimmed"
          component={iconMap[platform.slug]}
        />
      ))}
    </Group>
  );
};

export default PlatformIconList;
