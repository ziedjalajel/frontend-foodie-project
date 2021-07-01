import axios from "axios";

export const ADD_RECIPE = "ADD_RECIPE";
export const FETCH_RECIPES = "FETCH_RECIPES";

export const addRecipe = (newRecipe, ingredientId) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      for (const key in newRecipe) formData.append(key, newRecipe[key]);
      const res = await axios.post(
        // ToDo bellah 3aleena netzakar if el url sa7
        "http://localhost:8000/recipes",
        formData
      );
      dispatch({
        type: ADD_RECIPE,
        payload: { newRecipe: res.data },
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const fetchRecipes = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("http://localhost:8000/recipes");
      dispatch({
        type: FETCH_RECIPES,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
