import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

// Redux stuff
import { createStore } from "redux";
import { applyMiddleware, compose } from "redux"; //we add this
import thunk from "redux-thunk"; //we add this
import { Provider } from "react-redux";

import rootReducer from "./store/reducers/rootReducer";
import { fetchIngredients } from "./store/actions/ingredientActions";
import { fetchCtegory } from "./store/actions/categoryActions";
import { fetchRecipes } from "./store/actions/recipeActions";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer, // reducer function
  composeEnhancers(applyMiddleware(thunk))
);

store.dispatch(fetchIngredients());
store.dispatch(fetchCtegory());
store.dispatch(fetchRecipes());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
