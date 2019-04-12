import React, { Component } from 'react';
import Faqsection from './components/Faqsection'
import './App.css';
import Form from './components/Form.js';
import Postrec from './components/Postrec';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Child from './components/child'
import Confmsg from './components/Confmsg'
import Header from './components/Layout/Header';
import Faqsection2 from './components/Faqsection2';
import AddFAQ from './components/AddFAQ';
import uuid from 'uuid';
state = {
  Faqsection2 : [
    {
      id:uuid.v4(),
      title: 'Read the questions carefully.'
    },
    {
      id:uuid.v4(),
      title: 'Number of commities?  Answer:6'
    },
    {
      id:uuid.v4(),
      title: 'Working Hours?     Answer:8'
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

delFaqsection2 = (id) =>{
this.setState({Faqsection2: [...this.state.Faqsection2.filter(Faqsection2 => Faqsection2.id !== id)]  });
}



class App extends Component {
  render() {
    return (
      <div className="App">


      <Faqsection />

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
        <div className="App">
      <div className="container">
      <Header />
      <AddFAQ AddFAQ={this.AddFAQ} />
      <Faqsection2 Faqsection2={this.state.Faqsection2} delFaqsection2={this.delFaqsection2} />
      </div>
      </div>
      </div>
      
      
      
    );
  }
}

export default App;
