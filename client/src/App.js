import React, { Component } from 'react';
import './App.css';
import Postrec from './components/Postrec';

import { BrowserRouter as Router, Route ,Link} from 'react-router-dom';

import Deleterec from './components/Deleterec';
import Getrec from './components/Getrec';
import Updaterec from './components/Updaterec';


import Child from './components/child'
import ProductDelete from './components/ProductDelete'
import ProductGet from './components/ProductGet'
import ProductPost from './components/ProductPost'
import ProductPut from './components/ProductPut'
import Confmsg from './components/Confmsg'
import Header from './components/Layout/Header';
import Faqsection2 from './components/Faqsection2';
//import uuid from 'uuid';
import Gallery from './components/Gallery';


import RequestList from './components/RequestList';
import RequestForm from './components/RequestForm';
import RequestDeletionForm from './components/RequestDeletionForm';
import ProfileList from './components/ProfileList';
import ProfileForm from './components/ProfileForm';
import SuggestionBox from './components/SuggestionBoxget'
import CreateSuggestionBox from './components/SuggestionBoxpost'
import UpdateSuggestionBox from './components/SuggestionBoxput'
import DeleteSuggestionBox from './components/SuggestionBoxDelete'

import HeaderAnnoun from './components/Layout/HeaderAnnoun';
import Announcements from './components/Announcements';
import About from './components/pages/About';



class App extends Component {
  
  render() {
    return (
      <Router>

      <div className="App">


                 

        <Postrec/>
        <Updaterec/>
        <Deleterec/>
        <Getrec/>
      
  <Route exact path="/Gallery" component={Gallery}/>

   
     <ul>
      <li>

           <Link to="/Gallery">GALLERY</Link>
          </li>
          </ul>

      <div className="App">
      <Confmsg/>
      </div>
          <div>
          <Route path="/child" component={Child}/>
          </div>
        
        
          <div className="App">
          <div className="container">
            <Header/>
            <Route exact path="/" render={props => (
              <React.Fragment>
                <Faqsection2 />
              </React.Fragment>
            )} />
            <Route path="/about" component={About} />
      
      </div>
      </div>
      

      <ProductGet/>
      <ProductPost/>
      <ProductPut/>
      <ProductDelete/>
      </div>
     <hr/>
  <Route path="/SkillsInMansheya">


      <RequestList>Get all Requests for skills</RequestList>

      <RequestForm>Request a Certain Skill</RequestForm>

      <RequestDeletionForm> Delete a certain Request to a skill </RequestDeletionForm>

      <ProfileList>Get all Workshop Owner profiles</ProfileList>

      <ProfileForm>Create a new WorkshopOwner Profile</ProfileForm>

  </Route>

  <Route exact path="/suggestionBox" component={SuggestionBox}/>
  <Route exact path="/createSuggestionBox" component={CreateSuggestionBox}/>
  <Route exact path="/deleteSuggestionBox" component={DeleteSuggestionBox} />
  <Route exact path="/updateSuggestionBox" component={UpdateSuggestionBox} />  
   

        <div className="App">
          <div className="container">
            <HeaderAnnoun/>
            <Route exact path="/" render={props => (
              <React.Fragment>
                <Announcements />
              </React.Fragment>
            )} />
            <Route path="/about" component={About} />
          </div>  
        </div>
      </Router>
      
      
    );
  }
}

export default App;

        