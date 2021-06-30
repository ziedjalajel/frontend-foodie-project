import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { addCategory, fetchCtegory } from "../store/actions/categoryActions";

const CategoryForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [category, setCategory] = useState({
    name: "",
    image: "",
  });
  const handleChange = (event) =>
    setCategory({ ...category, [event.target.name]: event.target.value });

  const handleImage = (event) =>
    setCategory({ ...category, image: event.target.files[0] });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addCategory(category)).then((a) => dispatch(fetchCtegory()));
    dispatch(fetchCtegory());
    history.push("/categories");
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <h1>Create Category</h1>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          type="text"
          value={category.name}
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
export default CategoryForm;
