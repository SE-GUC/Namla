import React, { Component } from 'react';
import axios from 'axios';
class Platform extends Component {
    
    state = {
        nebnyUser:{},
        currentUsers:[],
        test:""
    }
    onSubmit = (e) => {
       e.preventDefault(); 
       axios.post(`http://localhost:5000/api/NebnyUsers/register`, this.state.nebnyUser).then(res =>{
         
        console.log(res)
          this.setState({ nebnyUser: {} });
        
      
    })};

    onChange = (e) => {
        const newChange = this.state.nebnyUser
        newChange[e.target.name] = e.target.value
        this.setState({
        nebnyUser: newChange})};

        componentDidMount() {
            axios.get('http://localhost:5000/api/NebnyUsers/')
              .then(res => { 
                if (res){
                  this.setState({ currentUsers: res.data.data })
                }
                });
          }
    render() {
      return (
          <div>
              <h1>Welcome to GUC Platform</h1>
              <h3>Current Nebny Users</h3>
              <div>
              {this.state.currentUsers.map(u=>(
                  <h5>{u.name}</h5>
              ))}
              </div>
              <h3>Sign UP</h3>
              <form onSubmit={this.onSubmit}  style={{display: 'flex'}}>
             <input
              type="text" 
              name="email" 
              style={{ flex: '10',padding:'5px' }}
              placeholder="enter your email."
              value={this.state.name}
              onChange={this.onChange}
              />
              <input
              type="number" 
              name="age" 
              style={{ flex: '10',padding:'5px' }}
              placeholder="enter your age."
              value={this.state.password}
              onChange={this.onChange}
              />
              <input
              type="text" 
              name="name" 
              style={{ flex: '10',padding:'5px' }}
              placeholder="enter your name."
              value={this.state.email}
              onChange={this.onChange}
              />
              <input
              type="text" 
              name="password" 
              style={{ flex: '10',padding:'5px' }}
              placeholder="enter your pass."
              value={this.state.age}
              onChange={this.onChange}
              />
              <input 
              type ="submit" 
              value = "submit"
              className="btn"
              style={{flex:'1'}}
              onSubmit={this.onSubmit}
              />

            </form>
          </div>
      );}}
      export default Platform;
