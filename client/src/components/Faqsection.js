import React, { Component } from 'react';
import axios from 'axios';



class Faqsection extends Component {

  constructor(props){
    super(props)
  
    this.state = {
        faqsection: []
    }
  }
    componentDidMount(){
        axios.get('http://localhost:5000/api/Faqsection2/')
        .then(res => {
            this.setState({faqsection: res.data.data}) 
            
           // console.log(res.data)
         })   
    }

  render() 
  {
    return (
      <div>
      <h1>Faqsection</h1>
      <u1>
      {this.state.faqsection.map(faq => (
      <li key={faq._id}>{faq.question} {faq.answer}</li> 

      ))} </u1>
      
      
        
      </div>
    );
  }
}

export default Faqsection;
