import { TextInput } from "@mantine/core";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSubmit: (search?: string) => void;
}

const SearchInput = ({ onSubmit }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit(ref.current?.value as string);
      }}
    >
      <TextInput
        ref={ref}
        variant="filled"
        radius="xl"
        icon={<BsSearch />}
        placeholder="Search games..."
      />
    </form>
  );
};

export default SearchInput;
