import {
  ADD_INGREDIENT,
  FETCH_INGREDIENTS,
} from "../actions/ingredientActions";

const initialState = {
  ingredients: [],
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INGREDIENT:
      const { newIngredient } = action.payload;

      return {
        ...state,
        ingredients: [...state.ingredients, newIngredient],
      };
    case FETCH_INGREDIENTS:
      return {
        ...state,
        ingredients: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
export default reducer;
