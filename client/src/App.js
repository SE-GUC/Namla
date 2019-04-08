import React, { Component } from 'react';
import './App.css';
import Announcement from './components/Announcement'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        
          <Announcement/>

        </header>
      </div>
    );
  }
}

export default App;
