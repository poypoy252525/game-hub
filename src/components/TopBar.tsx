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
import { Link } from "react-router-dom";

const TopBar = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  return (
    <Header p="sm" height={60}>
      <Group noWrap sx={{ height: "100%" }} position="apart">
        <Group noWrap>
          <Image width={30} src={Logo} />
          <MediaQuery smallerThan="md" styles={{ fontSize: 18 }}>
            <Link
              style={{
                textDecoration: "none",
                fontSize: "inherit",
                color: "inherit",
              }}
              to="/"
            >
              <Title sx={{ whiteSpace: "nowrap" }} order={3}>
                Game Hub
              </Title>
            </Link>
          </MediaQuery>
        </Group>
        <Group noWrap>
          <MediaQuery smallerThan="md" styles={{ width: "100%" }}>
            <Box>
              <SearchInput />
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
