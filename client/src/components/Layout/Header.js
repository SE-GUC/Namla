import React from 'react';
import {Link} from 'react-router-dom';

function Header(){
    return(
        <header style={HS}>
            <h1>FAQsection</h1>

            <Link style={lS}  to="/">FAQsection</Link>|<Link style={lS}  to="/about">About</Link>

             
        </header>
    )
}

const HS ={
    background : '#333',
    color: '#fff',
    textAlign:'center',
    padding: '10px'
}

const lS = {
  color: '#fff',
  textDecoration: 'none'

}
export default Header;