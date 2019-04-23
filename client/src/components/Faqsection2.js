import React, { Component } from 'react';
import Faqsectionitem from './Faqsectionitem';
import PropTypes from 'prop-types';
import axios from 'axios';

class Faqsection2 extends Component {
  state = {
    questions: [],
    details: '',
  }

 
  componentDidMount() {
    axios.get('http://localhost:5000/api/Faqsection2/')
      .then(res => { 
        if (res){
          this.setState({ questions: res.data.data })
        }
        });
  }   

  handledel = (id) => {
    axios.delete(`http://localhost:5000/api/Faqsection2/${id}`)
      .then(res =>
        {if (res) {
          axios.get('http://localhost:5000/api/Faqsection2/')
          .then(res => { 
        if (res){
          this.setState({ questions: res.data.data })
        }
        });
        }}
        );

  }

  handleupd = (id,updateDetails) => {
    axios.put(`http://localhost:5000/api/Faqsection2/${id}`, {
      details: updateDetails
    }).then(res =>
      {if (res) {
        axios.get('http://localhost:5000/api/Faqsection2/')
        .then(res => { 
      if (res){
        this.setState({ questions: res.data.data })
      }
      });
      }}
      );

}

  onSubmit = (e) => {
    e.preventDefault();
    const {details} = this.state;
    axios.post('http://localhost:5000/api/Faqsection2/', {
      details
    }).then(res => {
      if (res){
        axios.get('http://localhost:5000/api/Faqsection2/')
      .then(res => { 
        if (res){
          this.setState({ questions: res.data.data, details: ''})
        }
        });
    }});
   
  }

  onChange = (e) => this.setState({ details: e.target.value });

  render() {
    const {questions} = this.state
    return (
      <div>
      <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
        <input 
          type="text" 
          name="details" 
          style={{ flex: '10', padding: '5px' }}
          placeholder="Add FAQ ..." 
          value={this.state.details}
          onChange={this.onChange}
        />
        <input 
          type="submit" 
          value="Submit" 
          className="btn"
          style={{flex: '1'}}
        />
      </form>
      {questions && questions.map((anno) => (
        <Faqsectionitem key={anno._id} anno={anno} handleUpdate={this.handleupd} handledeleted={this.handledel} />
      ))}
        
      </div>
      
    );
  }
}

Faqsection2.propTypes = {
  questions: PropTypes.array.isRequired,
  delete: PropTypes.func.isRequired,
}

export default Faqsection2;