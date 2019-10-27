import React, { Component } from 'react';
import Menu from './MenuComponent'
import Dishdetail from './DishdetailComponent';
import { Navbar , NavbarBrand} from 'reactstrap'
import DISHES from '../shared/dishes'

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes : DISHES,
      selectedDish : null
    };
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId });
}


  render(){
    return(
      <div className="App">
        <Navbar dark color="primary">
          <div className="container text-light">
            <NavbarBrand>Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>       
            <Menu dishes={this.state.dishes}
                onClick={(dishId) => this.onDishSelect(dishId)}/>
            <Dishdetail dishes={this.state.dishes}  dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}/>
            
      </div>
    )
  }

}

export default Main
