import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Form from './components/Form.js';
import Postrec from './components/Postrec';



class App extends Component {

  state = {
    fields: {}
  };

  onChange = updatedValue => {
    this.setState({
      fields: {
        ...this.state.fields,
        ...updatedValue
      }
    });
  };

  render() {
    return (
      <div className="App">
      <div>Recruitment Form</div>
        <Form onChange={fields => this.onChange(fields)}/>
        <p>
          {JSON.stringify(this.state.fields,null,2)}
        </p>
        <p>to post </p>
        <div className="Post">
      <Postrec/>
      </div>
      <div className="App">
      <Confmsg/>
      </div>
      </div>
      
    );
  }
}

export default App;
