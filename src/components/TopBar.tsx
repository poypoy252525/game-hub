import {
  Group,
  Header,
  Image,
  Title,
  ActionIcon,
  useMantineColorScheme,
  MediaQuery,
  Box,
} from "@mantine/core";
import Logo from "../assets/react.svg";
import { BsSun, BsMoonStars } from "react-icons/bs";
import SearchInput from "./SearchInput";

interface Props {
  onSearchSubmit: (search: string | null) => void;
}

const TopBar = ({ onSearchSubmit }: Props) => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  return (
    <Header p="sm" height={60}>
      <Group noWrap sx={{ height: "100%" }} position="apart">
        <Group noWrap>
          <Image width={30} src={Logo} />
          <MediaQuery smallerThan="md" styles={{ fontSize: 18 }}>
            <Title sx={{ whiteSpace: "nowrap" }} order={3}>
              Game Hub
            </Title>
          </MediaQuery>
        </Group>
        <Group noWrap>
          <MediaQuery smallerThan="md" styles={{ width: "100%" }}>
            <Box>
              <SearchInput onSubmit={onSearchSubmit} />
            </Box>
          </MediaQuery>
          <ActionIcon
            size={"lg"}
            variant="default"
            onClick={() => toggleColorScheme()}
          >
            {colorScheme === "dark" ? <BsSun /> : <BsMoonStars />}
          </ActionIcon>
        </Group>
      </Group>
    </Header>
  );
};

export default TopBar;
