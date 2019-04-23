import React, { Component } from 'react';


  export class Logout extends Component {
      state ={
        email:'',
        password:'',
        Headers:localStorage.getItem('jwtToken')
      }
logout =  event => {
    localStorage.clear()
}
render() {
    if (this.state.Headers!=null) {
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
          else{
              return(
                <form> 
                <div>  
                you are logged in/>
                
                </div>
      </form>    
              );
          }
        }
      }
      
  
  export default Logout;


