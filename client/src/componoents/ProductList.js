import React, { Component } from 'react';
import axios from 'axios';
export default class ProductList extends Component {
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
{this.state.products.map(product => <li>{product.name}</li>)}
    </ul>
)
}
}
