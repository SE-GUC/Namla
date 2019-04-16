import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AnnouncementItems extends Component {
  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
    }
  }

  state = {updateDetails:''}
  onChange = (e) => this.setState({ updateDetails: e.target.value });
  
 

  render() {
    const id= this.props.anno._id
    const details= this.props.anno.details
    const {updateDetails} = this.state;
    const { handledeleted, handleUpdate } = this.props
console.log(id)
    return (
      <div style={this.getStyle()}>
        <p>
          { details }
          <button onClick={() => handledeleted(id)} style={btnStyle}>x</button>
        </p>
        <form onSubmit={() => handleUpdate(id, updateDetails)} style={{ display: 'flex' }}>
        <input 
          type="text" 
          name="details" 
          style={{ flex: '10', padding: '5px' }}
          placeholder="UPDATE" 
          value={this.state.updateDetails}
          onChange={this.onChange}
        />
        <input 
          type="submit" 
          value="Update" 
          className="btn"
          style={{flex: '1'}}
        />
      </form>
      </div>
    )
  }
}


AnnouncementItems.propTypes = {
  anno: PropTypes.object.isRequired,
  delete: PropTypes.func.isRequired,
}

const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '3px 6px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}

export default AnnouncementItems