import { useState } from "react";
import RecipeItem from "./RecipeItem";
import SearchBar from "../SearchBar";
import { Link } from "react-router-dom";
import { ListWrapperCategory, Center } from "../../styles";

const RecipeList = ({ recipes }) => {
  const [query, setQuery] = useState("");

  const recipeList = recipes
    ?.filter((recipe) =>
      recipe.name?.toLowerCase().includes(query.toLowerCase())
    )
    .map((recipe) => <RecipeItem recipe={recipe} key={recipe.id} />);
  return (
    <div className="container">
      <div>
        <SearchBar setQuery={setQuery} />
        <ListWrapperCategory className="row">{recipeList}</ListWrapperCategory>
      </div>
      <Center>
        <Link to={"/recipes/new"}>
          <button
            style={{ marginTop: "80px" }}
            type="button"
            class="btn btn-light"
          >
            Add Recipe
          </button>
        </Link>
      </Center>
    </div>
  );
};
export default RecipeList;
