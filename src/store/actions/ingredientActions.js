import axios from "axios";
// ACTION TYPES
export const ADD_INGREDIENT = "ADD_INGREDIENT";
export const FETCH_INGREDIENTS = "FETCH_INGREDIENTS";

//actions
export const addIngredient = (newIngredient, categoryId) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      for (const key in newIngredient) formData.append(key, newIngredient[key]);
      const res = await axios.post(
        `http://localhost:8000/categories/${categoryId}/ingredients`,
        formData
      );
      dispatch({
        type: ADD_INGREDIENT,
        payload: { newIngredient: res.data },
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const fetchIngredients = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("http://localhost:8000/ingredients");
      dispatch({
        type: FETCH_INGREDIENTS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
