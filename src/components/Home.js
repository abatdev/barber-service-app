import React from 'react';
import barberLogo from '../barber_logo.png'

const Home = () =>{
  return (
    <div className='row'>

        <div className='container'>
          <div className='child center'>
            <img src={barberLogo} width="400" height="400" alt="Barber logo"></img>
          </div>




          <h2>Stay blessed by receiving<br></br> 
          barber services through <br></br>
          Blessed by Adean</h2>

        </div> 

        <div id="startBtn"><button>Get Started</button></div> 
    </div>
  )
}

export default Home;