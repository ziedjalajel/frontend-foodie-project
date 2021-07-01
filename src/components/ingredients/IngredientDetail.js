import { Redirect, useParams } from "react-router-dom";
import { DetailWrapper } from "../../styles";
import { useSelector } from "react-redux";
import RecipeList from "../recipes/RecipeList";

const IngredientDetail = () => {
  const { ingredientSlug } = useParams();
  const ingredient = useSelector((state) =>
    state.ingredients.ingredients.find(
      (ingredient) => ingredient.slug === ingredientSlug
    )
  );
  console.log(ingredient.Recipes);
  if (!ingredient) return <Redirect to="/ingredients" />;
  return (
    <div>
      <DetailWrapper>
        <h1>{ingredient.name}</h1>
        <img src={ingredient.image} alt={ingredient.name} />
        <p>{ingredient.description}</p>
        <RecipeList recipes={ingredient.Recipes} />
      </DetailWrapper>
    </div>
  );
};
export default IngredientDetail;
