import { Link } from "react-router-dom";
import { IngredientWrapper } from "../../styles";

const IngredientItem = ({ ingredient }) => {
  return (
    <IngredientWrapper className="col-lg-4 col-md-6 col-sm-6">
      <Link to={`/ingredients/${ingredient.slug}`}>
        <img class="img-rounded" alt={ingredient.name} src={ingredient.image} />
      </Link>
      <p className="ingredient-name">{ingredient.name}</p>
    </IngredientWrapper>
  );
};
export default IngredientItem;
