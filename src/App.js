import "./App.css";
import { Route, Switch } from "react-router";
import NavBar from "./components/NavBar";
import CategoryDetail from "./components/categories/CategoryDetail";
import IngredientForm from "./components/IngredientForm";
import CategoryList from "./components/categories/CategoryList";
import IngredientDetail from "./components/ingredients/IngredientDetail";
import IngredientList from "./components/ingredients/IngredientList";
import Home from "./components/Home";
import { useSelector } from "react-redux";
import { GlobalStyle } from "./styles";
import CategoryForm from "./components/CategoryForm";

function App() {
  //ToDO:dont forget to use selector
  const ingredients = useSelector((state) => state.ingredients.ingredients);
  return (
    <div>
      <GlobalStyle />
      <NavBar />
      <Switch>
        <Route exact path="/categories/:categorySlug/ingredients/new">
          <IngredientForm />
        </Route>
        <Route exact path="/categories/new">
          <CategoryForm />
        </Route>
        <Route exact path="/categories/:categorySlug">
          <CategoryDetail />
        </Route>
        <Route exact path="/categories">
          <CategoryList />
        </Route>
        <Route exact path="/ingredients/:ingredientSlug">
          <IngredientDetail />
        </Route>
        <Route exact path="/ingredients">
          <IngredientList ingredients={ingredients} />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
