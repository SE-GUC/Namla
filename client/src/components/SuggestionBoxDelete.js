import React, { Component } from 'react';
import axios from 'axios';

class SuggestionBoxDelete extends Component {
state = {
   comment:""
};

handleChangeComment = event => {
    this.setState({comment: event.target.value})
};


handleSubmit = event=>{
    event.preventDefault();

    axios.delete(`http://localhost:5000/api/suggestionbox/${this.state.id}`)
    .then(res=>{
    console.log(res);
    console.log(res.data);
    });
}





render() {
return(
    <form onSubmit={this.handleSubmit}>
        <label>
            comment:
            <input  id="id" onChange={this.handleChangeComment}/><br/>
        </label>
       <button type="submit">delete</button>

    </form>
)
}
}export default SuggestionBoxDelete;