import React, { Component } from "react";
import foods from './foods'

class FoodBox extends Component {
  state = {
    foods:foods
  }
  foodAdd = () => {
    let foods = this.state.foods.map((food, i) => {
      // return <li>{food.name}</li>;
      return (
        <div className="box">
    <article className="media">
      <div className="media-left">
        <figure className="image is-64x64">
          <img src="https://i.imgur.com/eTmWoAN.png" />
        </figure>
      </div>
      <div className="media-content">
        <div className="content">
          <p>
            <strong>{food.name}</strong> <br />
            <small>400 cal</small>
          </p>
        </div>
      </div>
      <div className="media-right">
        <div className="field has-addons">
          <div className="control">
            <input
              className="input"
              type="number" 
              value="1"
            />
          </div>
          <div className="control">
            <button className="button is-info">
              +
            </button>
          </div>
        </div>
      </div>
    </article>


   
  </div>
      )
    });
    return foods; 
  };
  render() {
    return <div>{this.foodAdd()}</div>;
  }
}
export default FoodBox;
