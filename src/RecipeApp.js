import React, { Component } from "react";
import logo from "./logo.svg";
import Recipe from "./Recipe";
import RecipeList from "./RecipeList";
import "./RecipeApp.css";

class RecipeApp extends Component {
  render() {
    return (
      <main className="body">
        <RecipeList />
        {/* <Recipe
          title="pasta"
          ingredients={["Sauce", "Bread", "Flour", "Ass"]}
          instructions="Skip class, smoke grass, and eat ass"
          img="https://i.kym-cdn.com/entries/icons/original/000/026/638/cat.jpg"
        />
        <Recipe
          title="pasta"
          ingredients={["Sauce", "Bread", "Flour", "Ass"]}
          instructions="Skip class, smoke grass, and eat ass"
          img="https://i.kym-cdn.com/entries/icons/original/000/026/638/cat.jpg"
        /> */}
      </main>
    );
  }
}

export default RecipeApp;
