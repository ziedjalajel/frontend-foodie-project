import { SearchBarStyled } from "../styles";

const SearchBar = ({ setQuery }) => {
  return (
    <SearchBarStyled
      placeholder="Search For a Category"
      onChange={(event) => setQuery(event.target.value)}
    />
  );
};
export default SearchBar;
