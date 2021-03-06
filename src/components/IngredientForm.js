import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { addIngredient } from "../store/actions/ingredientActions";
import { useState } from "react";
import { fetchCtegory } from "../store/actions/categoryActions";

const IngredientForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { categorySlug } = useParams();

  const [ingredient, setIngredient] = useState({
    name: "",
    description: "",
    image: "",
  });
  const handleChange = (event) =>
    setIngredient({ ...ingredient, [event.target.name]: event.target.value });

  const handleImage = (event) =>
    setIngredient({ ...ingredient, image: event.target.files[0] });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addIngredient(ingredient, categorySlug)).then((a) =>
      dispatch(fetchCtegory())
    );
    dispatch(fetchCtegory());
    history.push("/ingredients");
  };
  return (
    <form className="container" onSubmit={handleSubmit}>
      <h1>Create Ingredient</h1>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          type="text"
          value={ingredient.name}
          onChange={handleChange}
          name="name"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Description</label>
        <input
          type="text"
          value={ingredient.description}
          onChange={handleChange}
          name="description"
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
export default IngredientForm;
