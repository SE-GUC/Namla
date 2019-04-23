import React, { Component } from 'react';
import Faqsectionitem from './Faqsectionitem';
import PropTypes from 'prop-types';
class Faqsection2 extends Component {
 
 
 
  render() {
    return this.props.Faqsection2.map((Faqsection2) => (
      <Faqsectionitem key={Faqsection2.id} Faqsection2 ={Faqsection2} markRead= {this.props.markRead}
      delFaqsection2 = {this.props.delFaqsection2}
      
      />


    ));
  }
}

Faqsection2.propTypes ={
  Faqsection2 : PropTypes.array.isRequired,
  markRead : PropTypes.func.isRequired,
  delFaqsection2 : PropTypes.func.isRequired
}

export default Faqsection2; 