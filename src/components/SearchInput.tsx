import { TextInput } from "@mantine/core";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../stores/gameQueryStore";

const SearchInput = () => {
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setSearchText(ref.current?.value);
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
