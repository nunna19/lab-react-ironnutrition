import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import FoodBox from './component/FoodBox'
import AddNewFood from './component/AddNewFood'




class App extends Component {

 
  
  constructor(){
    super();
    this.state={
      search: 'Level Up'
    }
  }







  render() {
    return (
      <div className="App">



      
       <FoodBox/>
      </div>
    );
  }
}

export default App;
