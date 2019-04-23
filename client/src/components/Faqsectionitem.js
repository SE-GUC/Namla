import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class Faqsectionitem extends Component{
  getStyle = () => {
   return{
       background: '#f4f4f4',
       padding: '10px',
       borderBottom : '1px #ccc dotted',
       textDecoration: this.props.Faqsection2.read ? 'line-through' :
       'none'
   }
       
  }

  


    render(){
        
        const { id , title} = this.props.Faqsection2;
        
        return(
            <div style = {this.getStyle() }>
            <p>
            <input type = "checkbox"  onChange={this.props.markRead.bind(this,id)} /> {' '}
            { title }
            
            <button onClick ={this.props.delFaqsection2.bind(this,id)}  style = {btnStyle} >x</button>

            </p>
            </div>
        )
    }
}

Faqsectionitem.propTypes ={
    Faqsection2 : PropTypes.object.isRequired,
    markRead : PropTypes.func.isRequired,
  delFaqsection2 : PropTypes.func.isRequired
  }

  const btnStyle = {
      background : '#ff0000',
      color : '#fff',
      border : 'none',
      padding: '5px 8px',
      borderRadius : '50%',
      cursor : 'pointer',
      float : 'right'
  }

 
export default Faqsectionitem;
