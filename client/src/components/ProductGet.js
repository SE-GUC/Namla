import React, { Component } from 'react';
import axios from 'axios';
export default class ProductGet extends Component {
state = {
    products: [],
};
componentDidMount(){
    axios.get('http://localhost:5000/api/products').then(res=> {
        console.log(res);
        this.setState({products: res.data})
    });
}
render() {
return(
    <ul>
{this.state.products.map(product => <li>{product.name}--------------{product.category}--------------{product.price}-----------{product._id}</li>)}
    </ul>
)
}
}
