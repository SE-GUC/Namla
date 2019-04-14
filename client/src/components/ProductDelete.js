import React, { Component } from 'react';
import axios from 'axios';
export default class ProductDelete extends Component {
state = {
    id: '',
    name: '',
    category: '',
    price: ''
};

handleChangeid = event => {
    this.setState({id: event.target.value})
};


handleSubmit = event=>{
    event.preventDefault();

    axios.delete(`http://localhost:5000/api/products/${this.state.id}`)
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
        </label>
       <button type="submit">delete</button>

    </form>
)
}
}