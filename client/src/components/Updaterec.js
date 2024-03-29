import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios'


export class Updaterec extends Component {
 state ={
   id: "",  
   ClientName:'',
   age:Number,
   address:'',
   InterviewDate:'',
   InterviewTime:'',
   
 }
 
 clientnameonChange (event){
   this.setState({ClientName: event.target.value});
  }
  addressonchange (event){
   this.setState({address: event.target.value});
   }
   ageonChange (event){
    this.setState({age: event.target.value});
    }
    InterviewDateonChange (event){
   this.setState({InterviewDate: event.target.value});
   }
   InterviewTimeonChange (event){
     this.setState({InterviewTime: event.target.value});
   }
   idonChange (event){
    this.setState({id: event.target.value});
    }
  

  onSubmit =event=>{
    //event.preventDefault();
   const ClientName=this.state.ClientName
   const age=this.state.age
   const address=this.state.address
   const InterviewDate=this.state.InterviewDate
   const InterviewTime=this.state.InterviewTime
    axios
    .put(`http://localhost:5000/api/RecruitmentForms/update/${this.state.id}`,({
    ClientName: ClientName,
    age:age,
    address:address,
    InterviewDate:InterviewDate,
    InterviewTime:InterviewTime
    
  }
  )
  )
    .then(res => {
      //console.log(res);
      console.log(res.data)
    })
   }
 
render() {
    return (
  <form >
  <div>
    <h1>Update Recruitment Form</h1>
    <input type="text"  placeholder="UserID/FormID" value={this.state.value} style={{ flex: '10', padding: '5px' }} onChange={this.idonChange.bind(this)}/><br/>
    <input type="text"  placeholder="Post rec" value={this.state.value} style={{ flex: '10', padding: '5px' }} onChange={this.clientnameonChange.bind(this)}/><br/>
    <input type="text"  placeholder="age"   value={this.state.value} style={{ flex: '10', padding: '5px' }} onChange={this.ageonChange.bind(this)}/><br/>      
    <input type="text"  placeholder="address" value={this.state.value} style={{ flex: '10', padding: '5px' }} onChange={this.addressonchange.bind(this)}/><br/>      
    <input type="text"  placeholder="InterviewDate" value={this.state.value} style={{ flex: '10', padding: '5px' }} onChange={this.InterviewDateonChange.bind(this)}/><br/>      
    <input type="text"  placeholder="InterviewTime" value={this.state.value} style={{ flex: '10', padding: '5px' }} onChange={this.InterviewTimeonChange.bind(this)}/><br/>  
    <input 
          type="submit" 
          className="btn"
          style={{flex: '1'}}
          onClick={this.onSubmit.bind(this)}
        />    </div>
    </form>
    );
  }
}


Updaterec.propTypes = {
    Updaterec: PropTypes.func.isRequired
}
export default Updaterec;