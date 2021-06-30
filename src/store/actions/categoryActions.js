import axios from "axios";
import * as actionTypes from "./types";

export const addCategory = (newCategory) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      for (const key in newCategory) formData.append(key, newCategory[key]);
      const res = await axios.post(
        "http://localhost:8000/categories",
        formData
      );
      dispatch({
        type: actionTypes.ADD_CATEGORY,
        payload: { newCategory: res.data },
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const fetchCtegory = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("http://localhost:8000/categories");
      dispatch({
        type: actionTypes.FETCH_CATEGORIES,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
