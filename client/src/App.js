import React, { Component } from 'react';
import './App.css';
import Form from './components/Form.js';
import Postrec from './components/Postrec';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Child from './components/child'
import Confmsg from './components/Confmsg'
class App extends Component {
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

        <Router>
          <Route path="/child" component={Child}/>
        </Router>
      </div>
      
    );
  }
}

export default App;
