import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import RecipeApp from "./RecipeApp";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(<RecipeApp />, document.getElementById("root"));
registerServiceWorker();
