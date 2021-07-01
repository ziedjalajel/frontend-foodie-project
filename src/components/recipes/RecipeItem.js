import { RecipeItemImage } from "../../styles";
const RecipeItem = (props) => {
  const recipe = props.recipe;
  return (
    <div className="col-lg-4 col-md-6 col-sm-6">
      <RecipeItemImage
        class="img-rounded"
        src={recipe.image}
        alt={recipe.name}
      />

      <p>{recipe.name}</p>
    </div>
  );
};
export default RecipeItem;
