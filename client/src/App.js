import React, { Component } from 'react';
import ProductPost from './components/ProductPost'
import './App.css';
import ProductGet from './components/ProductGet';
import ProductPut from './components/ProductPut';
import ProductDelete from './components/ProductDelete';

class App extends Component {
  render() {
    return (
      <div className="App">
      <ProductGet/>
      <ProductPost/>
      <ProductPut/>
      <ProductDelete/>
      </div>
    );
  }
}

export default App;
