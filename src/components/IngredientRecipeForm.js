import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { addRecipe, fetchRecipes } from "../store/actions/recipeActions";

const IngredientRecipeForm = ({ ingredients }) => {
  const { ingredientSlug } = useParams();

  const dispatch = useDispatch();
  const history = useHistory();
  const [recipe, setRecipe] = useState({
    Recipes: [],
  });
  const handleChange = (event) =>
    setRecipe({ ...recipe, [event.target.name]: event.target.value });

  const handleImage = (event) =>
    setRecipe({ ...recipe, image: event.target.files[0] });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addRecipe(recipe)).then((a) => dispatch(fetchRecipes()));
    dispatch(fetchRecipes());
    history.push(`/ingredients/${ingredientSlug}`);
  };
  return (
    <form className="container" onSubmit={handleSubmit}>
      <h1>Create Recipe</h1>
      <div className="mb-3">
        <label className="form-label">Recipes ID</label>
        <input
          type="text"
          value={recipe.name}
          onChange={(event) =>
            setRecipe({
              ...recipe,
              [event.target.name]: event.target.value.split(",").map((a) => +a),
            })
          }
          name="Recipes"
          className="form-control"
        />
      </div>

      <button type="submit" class="btn btn-outline-success">
        Create
      </button>
    </form>
  );
};
export default IngredientRecipeForm;
