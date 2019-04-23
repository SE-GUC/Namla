


import React, { Component } from 'react';
import axios from 'axios';

class GetCart extends Component {
state = {
    Cart:[],
};
componentDidMount(){
    axios.get('http://localhost:5000/api/Cart')
    .then(res=> {
        this.setState({Cart: res.data})
    })
    .catch(err=>console.log(err))
}
render() {
return(
    <div>
      {this.state.Cart.map(Cart =>  <h3>{Cart.comment}</h3>)}
      {this.state.Cart.map(Cart =>  <h3>{Cart.comment}</h3>)}
    
    </div>
)
}
}
export default GetCart