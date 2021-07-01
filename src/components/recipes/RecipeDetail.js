import { getIngredientById } from "../../store/utils";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Redirect, useParams } from "react-router-dom";
import { DetailWrapper } from "../../styles";
import IngredientList from "../ingredients/IngredientList";

const RecipeDetail = () => {
  const { recipeSlug } = useParams();
  const recipe = useSelector((state) =>
    state.recipes.recipes.find((_recipe) => _recipe.slug === recipeSlug)
  );
  const ingredients = useSelector((state) => state.ingredients.ingredients);
  if (!recipe) return <Redirect to="/recipes" />;
  const listOfIngredients = recipe.ingredients.map((ingredient) =>
    getIngredientById(ingredient.id, ingredients)
  );
  return (
    <div className="row">
      <div className="container">
        <DetailWrapper className="col-12">
          <h3>{recipe.name}</h3>
          <img src={recipe.image} alt={recipe.image} />
          <Link to={`/recipes/${recipe.id}/ingredients/new`}>
            <button type="button" class="btn btn-outline-secondary">
              Add Ingredient
            </button>
          </Link>
        </DetailWrapper>
      </div>
      <div className="col-12">
        <IngredientList ingredients={listOfIngredients} />
      </div>
    </div>
  );
};
export default RecipeDetail;
