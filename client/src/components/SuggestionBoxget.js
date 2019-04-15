import React, { Component } from 'react';
import axios from 'axios';

class SuggestionBoxget extends Component {
state = {
    suggestionbox:[],
};
componentDidMount(){
    axios.get('http://localhost:5000/api/suggestionbox')
    .then(res=> {
        this.setState({suggestionbox: res.data})
    })
    .catch(err=>console.log(err))
}
render() {
return(
    <div>
      {this.state.suggestionbox.map(suggestionbox =>  <h3>{suggestionbox.comment}</h3>)}
    
    </div>
)
}
}
export default SuggestionBoxget