import React from 'react'
import{Link} from 'react-router-dom'

export default function Header() {
  return (
    <header style={headerStyle}>
      <h1>ANNOUNCEMENTS</h1>
      <Link style={linkStyle} to="/">Home</Link>|<Link style={linkStyle} to="/about">About</Link>
      </header>
  )
}
const headerStyle=
{
    background: '#333',
    color:'#fff',
    padding:'10px 20px',
    textAlign:'center'
}
const linkStyle=
{
    
    color:'#fff'
}