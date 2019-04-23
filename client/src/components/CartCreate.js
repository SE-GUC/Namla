import React, { Component } from 'react';
import axios from 'axios';

class CartCreate extends Component {
state = {
  
  Confirmed:false,
  TotalPrice:Number,
  Products:"",
};

handleChangeconfirmed(event) {
 this.setState({Confirmed:event.target.value})
}   
handleChangetotalprice(event) {
    this.setState({Confirmed:event.target.value})
   }
handleChangeproducts(event) {
    this.setState({Confirmed:event.target.value})
   }  




onSubmit = event=>{
    event.preventDefault();
      const  Confirmed= this.state.Confirmed 
       const TotalPrice= this.state.TotalPrice
       const Products= this.state.Products   
    axios.post('http://localhost:5000/api/Cart/',({
        Confirmed:Confirmed,
        TotalPrice:TotalPrice,
        Products:Products
    }
    )
    )
    .then(res => {
        //console.log(res);
        console.log(res.data)
      })
}





render() {
    return (
  <form >
  <div>
    <h1>Cart Creation</h1>
    <input type="text"  placeholder="Confirmed" value={this.state.value} style={{ flex: '10', padding: '5px' }} onChange={this.handleChangeconfirmed.bind(this)}/><br/>
    <input type="text"  placeholder="TotalPrice"   value={this.state.value} style={{ flex: '10', padding: '5px' }} onChange={this.handleChangetotalprice.bind(this)}/><br/>      
    <input type="text"  placeholder="Products" value={this.state.value} style={{ flex: '10', padding: '5px' }} onChange={this.handleChangeproducts.bind(this)}/><br/>      
       <button type="submit">create</button>
       </div>

    </form>
)
}
}
export default CartCreate;
