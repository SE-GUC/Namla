import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios'


export class DeleteCart extends Component {
 state ={
   id: ""
 }
 
 idonChange (event){
    this.setState({id: event.target.value});
    }
  

  onSubmit =event=>{
   
   const id=this.state.id
    axios
    .delete(`http://localhost:5000/api/Cart/${this.state.id}`,({
    //id: id 
  }))
    .then(res => {
      //console.log(res);
      console.log(res.data)
    })
   }
 
render() {
    return (
  <form >
  <div>
    <h1>Delete Cart</h1>
    <input type="text"  placeholder="Cart ID" value={this.state.value} style={{ flex: '10', padding: '5px' }} onChange={this.idonChange.bind(this)}/><br/>
 
    <input 
          type="submit" 
          className="btn"
          style={{flex: '1'}}
          onClick={this.onSubmit.bind(this)}
        /></div>
    </form>
    );
  }
}


DeleteCart.propTypes = {
    DeleteCart: PropTypes.func.isRequired
}
export default DeleteCart;