import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'
export default function NavBar() {
  return (
    <div className='navBar Caveat'>
        <ul>
            <Link to="/#home"><li className='navElement'><span className='navText'>HOME</span></li></Link>
            <Link to={"/#about"}><li className='navElement'><span className='navText'>ABOUT</span></li></Link>
            <Link to={"/#project"}><li className='navElement'><span className='navText'>PROJECTS</span></li></Link>
            <Link to={"/#connect"}><li className='navElement'><span className='navText'>CONNECT</span></li></Link>
        </ul>
    </div>
  )
}
