import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { addRecipe, fetchRecipes } from "../store/actions/recipeActions";

const RecipeForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [recipe, setRecipe] = useState({
    name: "",
    image: "",
  });
  const handleChange = (event) =>
    setRecipe({ ...recipe, [event.target.name]: event.target.value });

  const handleImage = (event) =>
    setRecipe({ ...recipe, image: event.target.files[0] });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addRecipe(recipe)).then((a) => dispatch(fetchRecipes()));
    dispatch(fetchRecipes());
    history.push("/recipes");
  };
  return (
    <form className="container" onSubmit={handleSubmit}>
      <h1>Create Recipe</h1>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          type="text"
          value={recipe.name}
          onChange={handleChange}
          name="name"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Image</label>
        <input
          type="file"
          onChange={handleImage}
          name="image"
          className="form-control"
        />
      </div>
      <button type="submit" class="btn btn-outline-success">
        Create
      </button>
    </form>
  );
};
export default RecipeForm;
