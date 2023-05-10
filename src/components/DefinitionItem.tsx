import { Box, Title } from "@mantine/core";
import { ReactNode } from "react";

interface Props {
  heading: string;
  children: ReactNode | ReactNode[];
}

const DefinitionItem = ({ heading, children }: Props) => {
  return (
    <Box>
      <Title color="dimmed" order={5}>
        {heading}
      </Title>
      <dt>{children}</dt>
    </Box>
  );
};

export default DefinitionItem;
