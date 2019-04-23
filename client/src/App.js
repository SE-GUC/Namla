import React, { Component } from 'react';
import Faqsection from './components/Faqsection'
import './App.css';
import Form from './components/Form.js';
import Postrec from './components/Postrec';

import { BrowserRouter as Router, Route ,Link} from 'react-router-dom'

import Deleterec from './components/Deleterec';
import Getrec from './components/Getrec';
import Updaterec from './components/Updaterec';

import Team from './components/team'
import CartCreate from './components/CartCreate'
import DeleteCart from './components/DeleteCart';
import Admingallery from './components/Admingallery';
import Login from './components/Login';
import Logout from './components/Logout';
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
import EditFaq from './components/EditFaq'
import Platform from './components/Layout/Platform'

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
      <Router>
           <li>
             <Link to="/Login">Admins</Link>
           </li>
           <Route exact path="/Login" component={Login}/>
           <Route exact path="/Logout" component={Logout}/>
           
      <div className="App">
      </div>
          <Route path="/team" component={Team}/>
        <div className="App">

      <Platform/>
      <Faqsection />
      <EditFaq />

          <Route exact path="/recform" component={Form}/>
          <Route exact path="/recform" component={Postrec}/>
          <Route exact path="/recform" component={Updaterec}/>
          <Route exact path="/recform" component={Deleterec}/>
          <Route exact path="/recform" component={Getrec}/>
            <ul>
               <li>
                 <Link to="/recform">Recruitment Page</Link>
               </li>
            </ul>
            <ul>
            <li>
             <Link to="/gallery">GALLERY</Link>
           </li>
           </ul>
           <Route exact path="/gallery" component={Admingallery}/>
      

      <div className="App">
      <Confmsg/>
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
     <hr/>
  <Route path="/SkillsInMansheya">
    <Header />

      <RequestList>Get all Requests for skills</RequestList>

      <RequestForm>Request a Certain Skill</RequestForm>

      <RequestDeletionForm> Delete a certain Request to a skill </RequestDeletionForm>

      <ProfileList>Get all Workshop Owner profiles</ProfileList>

      <ProfileForm>Create a new WorkshopOwner Profile</ProfileForm>

  </Route>

  <Route exact path="/CartCreate" component={CartCreate}/>
  <Route exact path="/DeleteCart" component={DeleteCart} />

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