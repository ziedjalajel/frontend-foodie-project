import { Redirect, useParams } from "react-router-dom";
import { DetailWrapper } from "../../styles";
import { useSelector } from "react-redux";

const IngredientDetail = () => {
  const { ingredientSlug } = useParams();
  const ingredient = useSelector((state) =>
    state.ingredients.ingredients.find(
      (ingredient) => ingredient.slug === ingredientSlug
    )
  );
  if (!ingredient) return <Redirect to="/ingredients" />;
  return (
    <DetailWrapper>
      <h1>{ingredient.name}</h1>
      <img src={ingredient.image} alt={ingredient.name} />
      <p>{ingredient.description}</p>
    </DetailWrapper>
  );
};
export default IngredientDetail;
