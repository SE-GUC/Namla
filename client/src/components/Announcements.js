import React, { Component } from 'react';
import AnnouncementItems from './AnnouncementItems';
import PropTypes from 'prop-types';
import axios from 'axios';

class Announcements extends Component {
  state = {
    announcements: [],
    details: '',
  }

 
  componentDidMount() {
    axios.get('http://localhost:5000/api/Announcement/')
      .then(res => { 
        if (res){
          this.setState({ announcements: res.data })
        }
        });
  }   

  handledelete = (id) => {
    axios.delete(`http://localhost:5000/api/Announcement/${id}`)
      .then(res =>
        {if (res) {
          axios.get('http://localhost:5000/api/Announcement/')
          .then(res => { 
        if (res){
          this.setState({ announcements: res.data })
        }
        });
        }}
        );

  }

  handleupdate = (id,updateDetails) => {
    axios.put(`http://localhost:5000/api/Announcement/${id}`, {
      details: updateDetails
    }).then(res =>
      {if (res) {
        axios.get('http://localhost:5000/api/Announcement/')
        .then(res => { 
      if (res){
        this.setState({ announcements: res.data })
      }
      });
      }}
      );

}

  onSubmit = (e) => {
    e.preventDefault();
    const {details} = this.state;
    axios.post('http://localhost:5000/api/Announcement/', {
      details
    }).then(res => {
      if (res){
        axios.get('http://localhost:5000/api/Announcement/')
      .then(res => { 
        if (res){
          this.setState({ announcements: res.data, details: ''})
        }
        });
    }});
   
  }

  onChange = (e) => this.setState({ details: e.target.value });

  render() {
    const {announcements} = this.state
    return (
      <div>
      <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
        <input 
          type="text" 
          name="details" 
          style={{ flex: '10', padding: '5px' }}
          placeholder="Add Announcement ..." 
          value={this.state.details}
          onChange={this.onChange}
        />
        <input 
          type="submit" 
          value="Submit" 
          className="btn"
          style={{flex: '1'}}
        />
      </form>
      {announcements && announcements.map((anno) => (
        <AnnouncementItems key={anno._id} anno={anno} handleUpdate={this.handleupdate} handledeleted={this.handledelete} />
      ))}
        
      </div>
      
    );
  }
}

Announcements.propTypes = {
  announcements: PropTypes.array.isRequired,
  delete: PropTypes.func.isRequired,
}

export default Announcements;