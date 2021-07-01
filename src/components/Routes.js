import { Route, Switch } from "react-router";
import CategoryDetail from "./categories/CategoryDetail";
import IngredientForm from "./IngredientForm";
import CategoryList from "./categories/CategoryList";
import IngredientDetail from "./ingredients/IngredientDetail";
import IngredientList from "./ingredients/IngredientList";
import Home from "./Home";

import CategoryForm from "./CategoryForm";
import RecipeList from "./recipes/RecipeList";
import RecipeDetail from "./recipes/RecipeDetail";
import RecipeForm from "./RecipeForm";
import IngredientRecipeForm from "./IngredientRecipeForm";

const Routes = (props) => {
  return (
    <Switch>
      <Route exact path="/categories/:categorySlug/ingredients/new">
        <IngredientForm />
      </Route>
      <Route exact path="/ingredients/:ingredientSlug/recipes/new">
        <IngredientRecipeForm ingredients={props.ingredients} />
      </Route>
      <Route exact path="/categories/new">
        <CategoryForm />
      </Route>
      <Route exact path="/recipes/new">
        <RecipeForm />
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
        <IngredientList ingredients={props.ingredients} />
      </Route>
      <Route exact path="/recipes/:recipeSlug">
        <RecipeDetail />
      </Route>
      <Route exact path="/recipes">
        <RecipeList recipes={props.recipes} />
        {console.log(props.recipes)}
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
};
export default Routes;
