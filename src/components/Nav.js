import React from 'react';
import {  Link } from "react-router-dom";
import './Nav.css';

const Nav= () =>{
  return (
  <div className='navContainer'>

        <div className='links'>
          <div>
          <Link to="/" style={{textDecoration: 'none'}} className='link'>Home</Link>
          </div>
          
          <div>
          <Link to="/about" style={{textDecoration: 'none'}} className='link'>About</Link>
          </div>
          
          <div>
          <Link to="/book" style={{textDecoration: 'none'}} className='link'>Book</Link>
          </div>
          
          <div>
          <Link to="/goats" style={{textDecoration: 'none'}} className='link'>Profile</Link>
          </div>
        </div>
        
  </div>
  );
}
export default Nav;