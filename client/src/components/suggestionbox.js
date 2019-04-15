import React, { Components } from 'react';


export default class suggestionbox extends Components {
  constructor() {
    super();
    this.onChangecomment = this.onChangecomment.bind(this);
   
    this.onSubmit = this.onSubmit.bind(this);
    this.delete=this.delete.bind(this);

    this.state = {
      suggestions:[],
     comment: ""
    }
  }
  onChangecomment(e) {
    this.setState({ comment: e.target.value });
}
  
   
  delete(id){
    return fetch('/api/suggestionbox/'+id, {
      method: 'DELETE',
     // body: JSON.stringify(databody),
      headers: {
          'Content-Type': 'application/json'
      },
  })
  .then(res => res.json())
  .then(data => console.log(data));
  }

  onSubmit(e) {
    e.preventDefault();
    let databody = {
      'comment': this.state.Name,
      
    }
  
   return fetch('/api/suggestionbox/', {
       method: 'POST',
       body: JSON.stringify(databody),
       headers: {
        'Content-Type': 'application/json'
    },
})
.then(res => res.json())
.then(data => console.log(data)); 
} 
componentDidMount(){
  
    fetch('/api/suggestionbox/')
    .then(res => res.json())
    .then(suggestionbox => this.setState({As: suggestionbox.data},()=> console.log('the suggestionbox',this.state.suggestions)));
  
}




  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3>SuggestionBox</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>comment:  
                    <input type="text" Name="comment" value={this.comment}
                      onChange={this.onChangecomment} />
                      <br/>
                      </label>
                </div>
               
                
            </form>
{<ul>
{this.state.suggestions.map( suggestionbox => <li key = {suggestionbox._id}> comment: {suggestionbox.comment} <button onClick= {() => {this.delete(suggestionbox._id)}}> Delete </button> </li>)}
</ul> 
});
}
}
        </div>
    )
  }
}