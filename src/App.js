import './App.css';
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Nav from './components/Nav';
import { useState, useEffect } from 'react';
import StripeBtn from './components/StripeBtn';


import Home from './components/Home';
import About from './components/About';
import Book from './components/Book';
import Auth from './components/Auth';
import Confirm from './components/Confirm';

import Form from './components/common/Form';
import { app } from './firebase-config';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem('Auth Token');
    navigate('/login')
  }

  const handleAction = (id) => {
    const authentication = getAuth();
    if (id === 1) {
      signInWithEmailAndPassword(authentication, email, password)
        .then((response) => {
          navigate('/')
          sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
        })
        .catch((error) => {
          console.log(error.code);
        })
    }
    if (id === 2) {
      createUserWithEmailAndPassword(authentication, email, password)
        .then((response) => {
          navigate('/')
          sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
        })
        .catch((error) => {
          console.log(error.code);
        })
    }
  }

  let authToken = sessionStorage.getItem('Auth Token')
  useEffect(() => {
    
    // if (authToken) {
    //   navigate('/')
    // }

    // if (!authToken) {
    //   navigate('/auth')
    // }
  }, [])

  return (
    <div className="App">

      {authToken ? <Nav /> : null}
      {authToken ? <button className='logoutBtn' onClick={handleLogout}>Log out</button> : null}

      <Routes>
        <Route
          path='/login'
          element={
            <Form
              title="Login"
              setEmail={setEmail}
              setPassword={setPassword}
              handleAction={() => handleAction(1)}
            />}
        />
        <Route
          path='/register'
          element={
            <Form
              title="Register"
              setEmail={setEmail}
              setPassword={setPassword}
              handleAction={() => handleAction(2)}
            />}
        />


        <Route path='/confirm' element={<Confirm/>}/>
        <Route path='/auth' element={<Auth/>} />
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/book' element={<Book/>} />
      </Routes>


      
      
    </div>
  );
}

export default App;
