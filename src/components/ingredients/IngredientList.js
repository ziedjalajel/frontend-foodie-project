import { ListWrapper } from "../../styles";
import SearchBar from "../SearchBar";
import { useState } from "react";
import IngredientItem from "./IngredientItem";

const IngredientList = ({ ingredients }) => {
  const [query, setQuery] = useState("");

  const ingredientList = ingredients
    .filter((ingredient) =>
      ingredient.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((ingredient) => (
      <IngredientItem ingredient={ingredient} key={ingredient.id} />
    ));
  return (
    <div className="container">
      <SearchBar setQuery={setQuery} />
      <ListWrapper className="row">{ingredientList}</ListWrapper>
    </div>
  );
};
export default IngredientList;
