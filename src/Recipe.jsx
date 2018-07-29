import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Recipe.css";

class Recipe extends Component {
  // static defaultProps = {
  //   recipe: {}
  // };
  // static propTypes = {
  //   ingredients: PropTypes.arrayOf(PropTypes.string).isRequired
  // };
  state = {};
  render() {
    const { title, img, instructions } = this.props;
    const ingredients = this.props.ingredients.map((ing, i) => (
      <li key={i}>{ing}</li>
    ));
    return (
      <div className="card m-4 recipe-card">
        <img className="card-img-top" src={img} alt={title} />
        <div className="card-body">
          <h1 className="card-title">{title} </h1>
          <h3>Ingredients</h3>
          <ul>{ingredients}</ul>
          <h3>Instructions</h3>
          <p>{instructions}</p>
        </div>
      </div>
    );
  }
}

export default Recipe;
