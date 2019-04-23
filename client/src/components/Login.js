  import React, { Component } from 'react';

  import axios from 'axios';
  import setAuthToken  from '../helpers/setAuthToken'

    export class Login extends Component {
        state ={
          email:'',
          password:'',
          Headers:localStorage.getItem('jwtToken')
        }
 login =  event => {
    const  userData={ email:this.state.email,
         password:this.state.password
    }
    
	axios.post('http://localhost:5000/api/NebnyAdmins/login', userData)
	.then( res => {
		const { token } = res.data
		localStorage.setItem('jwtToken', token)
		setAuthToken(token)

	})
	.catch(err => console.log('error'))
		
  };
  

  logout =  event => {
			localStorage.clear()
	}


    emailonChange (event){
        this.setState({email: event.target.value});
       }
       passwordonChange (event){
        this.setState({password: event.target.value});
        }
    render() {
      if (this.state.Headers==null) {
      return (
      <form >
      <div>
        
        <h1>login</h1>
        <input type="text"  id="email"     placeholder="email" value={this.state.value} style={{ flex: '10', padding: '5px' }} onChange={this.emailonChange.bind(this)}/><br/>
        <input type="text"  id="password"  placeholder="password"   value={this.state.value} style={{ flex: '10', padding: '5px' }} onChange={this.passwordonChange.bind(this)}/><br/>      
       
        <input 
              type="submit" 
              value="login"
              className="btn"
              id="login"
              style={{flex: '1'}}
              onClick={this.login.bind(this)}
            />
            </div>
            </form>
            );
            }
            else {
              return(
                <form> 
         <div>   
           
        <input 
              type="submit" 
              value="logout"
              className="btn"
              id="logout"
              style={{flex: '1'}}
              onClick={this.logout.bind(this)}
            /></div>
        </form>
              );
            }
          }
        }
    
    export default Login;
