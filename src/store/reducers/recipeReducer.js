import { ADD_RECIPE, FETCH_RECIPES } from "../actions/recipeActions";

const initialState = {
  recipes: [],
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_RECIPE:
      const { newRecipe } = action.payload;
      return {
        ...state,
        recipes: [...state.recipes, newRecipe],
      };
    case FETCH_RECIPES:
      return {
        ...state,
        recipes: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
export default reducer;
