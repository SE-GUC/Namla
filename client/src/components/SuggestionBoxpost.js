import React, { Component } from 'react';
import axios from 'axios';

class SuggestionBoxpost extends Component {
state = {
  //comments:[],
  comment:""
};
constructor(props){
  super(props)
  this.state={
    comment:""
  }
  this.handleChangecomment.bind(this)
}

handleChangecomment(event) {
 this.setState({comment:event.target.value})
}   
/*handleChangecomments = event => {
  this.setState({comments: event.target.value})
};*/


handleSubmit = event=>{
    event.preventDefault();

    const suggestionbox ={
        comment: this.state.comment,
        //comments: this.state.comments,
        
    }

    axios.post('http://localhost:5000/api/suggestionbox', suggestionbox)
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
            <input  comment="name" onChange={this.handleChangecomment.bind(this)}/><br/>
            
            
        </label>
       <button type="submit">create</button>

    </form>
)
}
}
export default SuggestionBoxpost;
