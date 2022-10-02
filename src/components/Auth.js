import React from 'react';
import './Auth.css';
import barberLogo from '../barber_logo.png';
import {  Link } from "react-router-dom";

const Auth = () =>{
  return (
    <div className='authContainer'>

      <div className='authBox'>

        <h1>Get started</h1>
        <p>Adean's barber services
          await you...
        </p>

        <div id='logo'>
        <img src={barberLogo} width="150" height="150" alt="Barber logo"></img>
        </div>

        <div id='loginBtn'>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        
        <br></br>

        <div id='signupBtn'>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        
      </div>

    </div>
  )
}

export default Auth;