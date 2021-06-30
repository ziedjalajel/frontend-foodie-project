import { getIngredientById } from "../../store/utils";
import { Link } from "react-router-dom";
import IngredientList from "../ingredients/IngredientList";
import { useSelector } from "react-redux";
import { Redirect, useParams } from "react-router-dom";
import { DetailWrapper } from "../../styles";

const CategoryDetail = () => {
  const { categorySlug } = useParams();
  const category = useSelector((state) =>
    state.categories.categories.find(
      (_category) => _category.slug === categorySlug
    )
  );
  const ingredients = useSelector((state) => state.ingredients.ingredients);
  if (!category) return <Redirect to="/categories" />;
  const listOfIngredients = category.ingredients.map((ingredient) =>
    getIngredientById(ingredient.id, ingredients)
  );
  return (
    <div className="row">
      <div className="container">
        <DetailWrapper className="col-12">
          <h3>{category.name}</h3>
          <img src={category.image} alt={category.name} />
          <Link to={`/categories/${category.id}/ingredients/new`}>
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
export default CategoryDetail;
