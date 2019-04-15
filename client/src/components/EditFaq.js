import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios'


export class EditFaq extends Component {
 state ={
   Faq:'',
   id:'',
   
 }
 idonChange (event){
   this.setState({id: event.target.value});
 }
 
 FaqonChange (event){
   this.setState({Faq: event.target.value});
  }

  onSubmit =event=>{
    event.preventDefault();
   const Faq=this.state.Faq
   
    axios.put('http://localhost:5000/api/Faqsection/${this.state.id}',({ 
      Faq : Faq  
    }
     ) 
     ).then(res => {
      //console.log(res);
      console.log(res.data)
    })
   }
 
render() {
    return (
  <form >
  <div>
  <input type="text"  placeholder="Faqid" value={this.state.value} style={{ flex: '10', padding: '5px' }} onChange={this.idonChange.bind(this)}/><br/> 
    <input type="text"  placeholder="Faqedit" value={this.state.value} style={{ flex: '10', padding: '5px' }} onChange={this.FaqonChange.bind(this)}/><br/>          
    <input  type="submit"  className="btn" style={{flex: '1'}} onClick={this.onSubmit.bind(this)} />    </div>
    </form>
    );
  }
}


EditFaq.propTypes = {
  EditFaq: PropTypes.func.isRequired
}
export default EditFaq;