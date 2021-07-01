import { Link } from "react-router-dom";
import { RecipeItemImage } from "../../styles";
const RecipeItem = (props) => {
  const recipe = props.recipe;
  return (
    <div className="col-lg-4 col-md-6 col-sm-6">
      <Link to={`/recipes/${recipe.slug}`}>
        <RecipeItemImage
          class="img-rounded"
          src={recipe.image}
          alt={recipe.name}
        />
      </Link>
      <p>{recipe.name}</p>
    </div>
  );
};
export default RecipeItem;
