import React, { Component } from "react";
import foods from '../foods'
import AddNewFood from './AddNewFood'

class FoodBox extends Component {



  
  state = {
    foods:foods,
    filteredFoods:foods,
    yourOrder: []
  }


  addFoodHandler = (theFood) => {
    console.log(theFood)
    const foodCopy = [...this.state.foods];
    foodCopy.push(theFood);
    this.setState({
      filteredFoods: foodCopy
    })
  }

  showOrder = () => {
    let order = this.state.yourOrder.map(order=>{
      return(
        <li>{order.name}</li>
      )
    })
    return order
  }

  updateSearch = (event) => {
    console.log(event.target.value)
    let filterList = this.state.foods.filter((food)=>{
      console.log(food)
      return food.name.toLowerCase().includes(event.target.value.toLowerCase())
    })
    this.setState({
      filteredFoods:filterList, 
      search:event.target.value
    })//substr(0,20)
  }

  
  addPhude = (food) => {
    console.log('add good',food)
    let newOrder = [...this.state.yourOrder]; 
    newOrder.push(food)
    this.setState({
      yourOrder:newOrder
    })
    
  } 


  food = () => {
    let foods = this.state.filteredFoods.map((food, i) => {
      return (
        <div className="box">
    <article className="media">
      <div className="media-left">
        <figure className="image is-64x64">
          <img src={food.image} />
        </figure>
      </div>
      <div className="media-content">
        <div className="content">
          <p>
            <strong>{food.name}</strong> <br />
            <small>{food.calories}</small>
          </p>
        </div>
      </div>
      <div className="media-right">
        <div className="field has-addons">
          <div className="control">
            <input
              className="input"
              type="number" 
              value={food.quantity}
            />
          </div>
          <div className="control">
            <button onClick={() => this.addPhude(food)} className="button is-info">
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
    return ( 
    <div>
    <form>
       <input type="text" value={this.state.search} placeholder="Search for..." 
       onChange={this.updateSearch}
       />

     </form>
   
      <AddNewFood addFoodHandler={this.addFoodHandler}/>
    {this.food()}

    <h1>show order</h1>
      {this.showOrder()}
    
    </div>

    );
  }
}
export default FoodBox;
