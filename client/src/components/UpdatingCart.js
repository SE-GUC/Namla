import React, { Component } from 'react';
import axios from 'axios';

class UpdatingCart extends Component {
state = {
  totalPrice: "",
  products:"", 
  confirmed: false ,
  cartID:""
};

handleChangetotalPrice(event) {
  this.setState({totalPrice: event.target.value})
}   
handleChangeproducts(event) {
    this.setState({products: event.target.value})
  }   
  handleChangeconfiremd(event) {
    this.setState({confirmed: event.target.value})
  }  
  handleChangeCartID(event) {
    this.setState({cartID: event.target.value})
  }   
handleSubmit = event=>{
    event.preventDefault();

    const Cart ={
        totalPrice: this.state.totalPrice,
        products: this.products,
        confirmed: this.confirmed
        
    }

    axios.put('http://localhost:5000/api/Cart', Cart)
    .then(res=>{
    console.log(res);
    console.log(res.data);
    });
}

render() {
return(
    <form onSubmit={this.handleSubmit}>
        <label>
            cartID:
            <input  totalPrice="name" onChange={this.handleChangeCartID}/><br/>
            totalPrice:
            <input  totalPrice="name" onChange={this.handleChangetotalPrice}/><br/>
            products
            <input  products ="name" onChange={this.handleChangeproducts}/><br/>
            confirmed
            <input  confirmed="name" onChange={this.handleChangeconfiremd}/><br/>
        </label>
       <button type="submit">update</button>

    </form>
)
}
} export default UpdatingCart;