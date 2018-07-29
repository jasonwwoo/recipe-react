import React, { Component } from "react";
import Recipe from "./Recipe";
import PropTypes from "prop-types";

class RecipeList extends Component {
  state = {};
  static defaultProps = {
    recipes: [
      {
        title: "Pasta",
        ingredients: ["Sauce", "Bread", "Flour", "Ass"],
        instructions: "Skip class, smoke grass, and eat ass",
        img: "https://i.kym-cdn.com/entries/icons/original/000/026/638/cat.jpg"
      },
      {
        title: "Milk",
        ingredients: ["Sauce", "Bread", "Flour", "Ass"],
        instructions: "Skip class, smoke grass, and eat ass",
        img: "https://i.kym-cdn.com/entries/icons/original/000/026/638/cat.jpg"
      },
      {
        title: "Spagett",
        ingredients: ["Sauce", "Bread", "Flour", "Ass"],
        instructions: "Skip class, smoke grass, and eat ass",
        img: "https://i.kym-cdn.com/entries/icons/original/000/026/638/cat.jpg"
      }
    ]
  };
  static propTypes = {
    recipes: PropTypes.arrayOf(PropTypes.object).isRequired
  };
  render() {
    const recipes = this.props.recipes.map((r, i) => <Recipe key={i} {...r} />);
    return <div className="recipe-list">{recipes}</div>;
  }
}

export default RecipeList;
