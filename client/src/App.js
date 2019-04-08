import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Child from './components/child'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route path="/child" component={Child}/>
        </Router>
      </div>
    );
  }
}

export default App;
