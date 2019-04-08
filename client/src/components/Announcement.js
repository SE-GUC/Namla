import React, { Component } from 'react';


export default class Announcement extends Component {
  constructor(props) {
    super(props);
    this.onChangetitle = this.onChangetitle.bind(this);
    this.onChangedetails = this.onChangedetails.bind(this);
   
    this.onSubmit = this.onSubmit.bind(this);
    this.delete=this.delete.bind(this);

    this.state = {
      Announcements:[],
     title: "",
      details: ""
    }
  }
  onChangetitle(e) {
    this.setState({ title: e.target.value });
}
  onChangedetails(e) {
    this.setState({ details: e.target.value });
  } 
   
  delete(id){
    return fetch('/api/Announcement/'+id, {
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
      'title': this.state.title,
      'details': this.state.details
    }
  
   return fetch('/api/Announcement/', {
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
  
  fetch('/api/Announcement/')
  .then(res => res.json())
  .then(Announcement => this.setState({As: Announcement.data},()=> console.log('the Announcement',this.state.Announcements)));

}



render() {
  return (
    <div>
        <div style={{ marginTop: 10 }}>
            <h3>ANNOUNCEMENTS</h3>
            </div>
        <label>title:</label>
    <input type='text' name='title' value={this.state.title} onChange={this.onChangetitle} />
    <div></div>
    <label>details: </label>
    <input type='text' name='title' value={this.state.details} onChange={this.onChangedetails} />
    <div></div>
    <button onClick={this.onSubmit.bind(this)}>Add Announcement</button>    
    </div>
    )
}
}