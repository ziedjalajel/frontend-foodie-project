import * as actionTypes from "../actions/types";

const initialState = {
  categories: [],
  // loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_CATEGORY:
      const { newCategory } = action.payload;
      return {
        ...state,
        categories: [...state.categories, newCategory],
      };
    case actionTypes.FETCH_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
        //   loading: false,
      };
    default:
      return state;
  }
};
export default reducer;
