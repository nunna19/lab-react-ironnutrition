import React, { Component  } from "react";
import FoodBox from './FoodBox'
import foods from '../foods'



class AddNewFood extends Component {

  state = {
    name: '',
    calories: '',
    quantity:'',
    addFood: [],
  }
  handleChange = (event) => {
    let { name, value } = event.target;

    console.log(name, value)
    this.setState({ [name]: value });
  }

  addFoodHandler = (theFood) => { //Go to parent adn change the parent state
      this.props.addFoodHandler(theFood)
   
  }




handleSubmit = (event) => {
  event.preventDefault();
  console.log( this.state);
  this.addFoodHandler(this.state)

}

  render(){
    return(
      <div className="addNew">


        <form onSubmit={this.handleSubmit}>
          <label>name:</label>
          <input type="text" name="name" value={this.state.name} onChange={(e) => this.handleChange(e)} />
          <label>calories:</label>
          <input type="text" name="calories" value={this.state.calories} onChange={(e) => this.handleChange(e)} />
          <label>quantity</label>
          <input type="text" name="quantity" value={this.state.quantity} onChange={(e) => this.handleChange(e)} />}
          <input type="submit" value="Submit" />
        </form>
   

      </div>
    );
  }
}
export default AddNewFood;