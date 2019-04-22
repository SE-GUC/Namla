import React, { Component } from 'react';
import SuggestionBoxDelete from './components/SuggestionBoxDelete';
import SuggestionBoxput from './components/SuggestionBoxput';
import SuggestionBoxpost from './components/SuggestionBoxpost';
import SuggestionBoxget from './components/SuggestionBoxget';
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import UpdatingCart from './components/UpdatingCart';

class App extends Component {
  render() {
    return (
        <div>
      <Router>
        <Route exact path='/SuggestionBox' component={ SuggestionBoxget}/>
        <Route exact path= '/createSuggestionBox' component ={SuggestionBoxpost }/>
        <Route exact path ='/updateSuggestionBox' component ={SuggestionBoxput }/>
        <Route exact path = '/deleteSuggestionBox' component = {SuggestionBoxDelete}/>
        <Route exact path = '/updatecart' component = {UpdatingCart}/>
        <Route exact path = '/getcart' component = {GetCart}/>
        
      </Router>
        </div>
    );
  }
}

export default App;