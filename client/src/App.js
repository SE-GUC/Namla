import React, { Component } from 'react';
import Faqsection from './components/Faqsection'
import './App.css';
import Form from './components/Form.js';
import Postrec from './components/Postrec';
import Deleterec from './components/Deleterec';
import Getrec from './components/Getrec';
import Updaterec from './components/Updaterec';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Child from './components/child'
import ProductDelete from './components/ProductDelete'
import ProductGet from './components/ProductGet'
import ProductPost from './components/ProductPost'
import ProductPut from './components/ProductPut'
import Confmsg from './components/Confmsg'
import Header from './components/Layout/Header';
import Faqsection2 from './components/Faqsection2';
import AddFAQ from './components/AddFAQ';
import uuid from 'uuid';


class App extends Component {
  state = {
    Faqsection2 : [
      {
        id:uuid.v4(),
        title: 'Read the questions carefully.',
        read:false
      },
      {
        id:uuid.v4(),
        title: 'Number of commities?  Answer:6',
        read:false
      },
      {
        id:uuid.v4(),
        title: 'Working Hours?     Answer:8',
        read: false
      }
    ]
  }
  
  AddFAQ = (title) => {
    const newFaqsection2 = {
      id :uuid.v4(),
      title: title
    }
    this.setState({Faqsection2 : [...this.state.Faqsection2,newFaqsection2]});
  }

   markRead = (id) =>{
     this.setState( { Faqsection2: this.state.Faqsection2.map( Faqsection2 => {
     if(Faqsection2.id == id){
       Faqsection2.read = !Faqsection2.read

     }  

     return Faqsection2;


     } ) } );
   }

   delFaqsection2 =(id) =>{
     this.setState({ Faqsection2:[...this.state.Faqsection2.filter(Faqsection2 => Faqsection2.id 
      !== id )] });
   }
    
  render() {
    return (
      <div className="App">


      <Faqsection />

      {/* <div>Recruitment Form</div> */}
        <Form onChange={fields => this.onChange(fields)}/>
        <p>
          {JSON.stringify(this.state.fields,null,2)}
        </p>
        <Postrec/>
        <Updaterec/>
        <Deleterec/>
        <Getrec/>
  
      <div className="App">
      <Confmsg/>
      </div>
        <Router>
          <Route path="/child" component={Child}/>
        </Router>
        <div className="App">
      <div className="container">
      <Header />
      <AddFAQ AddFAQ={this.AddFAQ} />
      <Faqsection2 Faqsection2={this.state.Faqsection2} markRead = {this.markRead} 
       delFaqsection2 = {this.delFaqsection2}
      />
      </div>
      </div>
      <ProductGet/>
      <ProductPost/>
      <ProductPut/>
      <ProductDelete/>
      </div>
      
      
      
    );
  }
}

export default App;