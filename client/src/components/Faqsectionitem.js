import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class Faqsectionitem extends Component{
    render(){
        const{id,title} = this.props.Faqsection2;
        return(
            <div style = {{backgroundColor: '#f4f4f4' }}>
            <p>{ this.props.Faqsection2.title }
            
            <button onClick ={this.props.delFaqsection2.bind(this,id)} style ={btnStyle}>x</button>
            </p>
            </div>
        )
    }
}

Faqsectionitem.propTypes ={
    Faqsection2 : PropTypes.object.isRequired
  }

  const btnStyle = {
      background: '#ff0000',
      color:'#fff',
      border : 'none',
      padding: '5px 9px',
      borderRadius: '50%',
      cursor: 'pointer',
      float : 'right'
  }

export default Faqsectionitem