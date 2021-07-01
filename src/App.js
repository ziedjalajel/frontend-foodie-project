import "./App.css";
import { Route, Switch } from "react-router";
import NavBar from "./components/NavBar";
import { useSelector } from "react-redux";
import { GlobalStyle } from "./styles";
import Routes from "./components/Routes";
import BeatLoader from "react-spinners/BeatLoader";

function App() {
  //ToDO:dont forget to use selector
  const ingredients = useSelector((state) => state.ingredients.ingredients);
  const recipes = useSelector((state) => state.recipes.recipes);

  const loadingIngredients = useSelector((state) => state.ingredients.loading);
  const loadingCategories = useSelector((state) => state.categories.loading);
  const loadingRecipes = useSelector((state) => state.recipes.loading);
  return (
    <div>
      <GlobalStyle />
      <NavBar />
      {loadingIngredients || loadingCategories || loadingRecipes ? (
        <BeatLoader size={20} />
      ) : (
        <Routes ingredients={ingredients} recipes={recipes} />
      )}
    </div>
  );
}

export default App;
