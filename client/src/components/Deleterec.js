import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios'


export class Deleterec extends Component {
 state ={
   id: ""
 }
 
 idonChange (event){
    this.setState({id: event.target.value});
    }
  

  onSubmit =event=>{
   // event.preventDefault();
   const id=this.state.id
    axios
    .delete(`http://localhost:5000/api/RecruitmentForms/${this.state.id}`,({
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
    <h1>Delete Recruitment Form</h1>
    <input type="text"  placeholder="AdminID/FormID" value={this.state.value} style={{ flex: '10', padding: '5px' }} onChange={this.idonChange.bind(this)}/><br/>
 
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


Deleterec.propTypes = {
    Deleterec: PropTypes.func.isRequired
}
export default Deleterec;