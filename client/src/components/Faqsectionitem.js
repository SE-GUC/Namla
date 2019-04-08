import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class Faqsectionitem extends Component{
    render(){
        return(
            <div style = {{backgroundColor: '#f4f4f4' }}>
            <p>{ this.props.Faqsection2.title }</p>
            </div>
        )
    }
}

Faqsectionitem.propTypes ={
    Faqsection2 : PropTypes.object.isRequired
  }

export default Faqsectionitem