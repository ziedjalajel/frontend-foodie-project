export const getIngredientById = (ingredientId, ingredients) =>
  ingredients.find((ingredient) => ingredient.id === ingredientId);
