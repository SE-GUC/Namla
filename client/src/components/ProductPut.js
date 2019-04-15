import React, { Component } from 'react';
import axios from 'axios';
export default class ProductPut extends Component {
state = {
    id: '',
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
handleChangeid = event => {
    this.setState({id: event.target.value})
};


handleSubmit = event=>{
    event.preventDefault();

    const product ={
        name: this.state.name,
        category: this.state.category,
        price: this.state.price
    }

    axios.put(`http://localhost:5000/api/products/${this.state.id}`, product)
    .then(res=>{
    console.log(res);
    console.log(res.data);
    });
}





render() {
return(
    <form onSubmit={this.handleSubmit}>
        <label>
            product id:
            <input  id="id" onChange={this.handleChangeid}/><br/>
            product name:
            <input  name="name" onChange={this.handleChangename}/><br/>
            product category:
            <input  category="category" onChange={this.handleChangecategory}/><br/>
            product price:
            <input  price="price" onChange={this.handleChangeprice}/><br/>
        </label>
       <button type="submit">update</button>

    </form>
)
}
}
