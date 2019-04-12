import React, { Component } from 'react';
import Faqsectionitem from './Faqsectionitem';
import PropTypes from 'prop-types';
class Faqsection2 extends Component {
  render() {
    return this.props.Faqsection2.map((Faqsection2) => (
      <Faqsectionitem key={Faqsection2.id} Faqsection2 ={Faqsection2} delFaqsection={this.props.delFaqsection} />


    ));
  }
}

Faqsection2.propTypes ={
  Faqsection2 : PropTypes.array.isRequired
}

export default Faqsection2;

