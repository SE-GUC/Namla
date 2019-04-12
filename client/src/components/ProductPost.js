import React, { Component } from 'react';
import axios from 'axios';
export default class ProductGet extends Component {
state = {
    name: '',
    category: '',
    price: ''
};

handleChangename = event => {
this.setState({name: event.target.value})
};
handleChangecategory = event => {
    this.setState({category: event.target.value})
 };
handleChangeprice = event => {
    this.setState({price: event.target.value})
};


handleSubmit = event=>{
    event.preventDefault();

    const product ={
        name: this.state.name,
        category: this.state.category,
        price: this.state.price
    }

    axios.post('http://localhost:5000/api/products', product)
    .then(res=>{
    console.log(res);
    console.log(res.data);
    });
}





render() {
return(
    <form onSubmit={this.handleSubmit}>
        <label>
            product name:
            <input  name="name" onChange={this.handleChangename}/><br/>
            product category:
            <input  category="category" onChange={this.handleChangecategory}/><br/>
            product price:
            <input  price="price" onChange={this.handleChangeprice}/><br/>
        </label>
       <button type="submit">create</button>

    </form>
)
}
}
