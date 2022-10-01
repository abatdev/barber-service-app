import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from './components/Nav';

import Home from './components/Home';
import About from './components/About';
import Book from './components/Book';

function App() {
  return (
    <div className="App">
      
      
      <Router>
      <Nav />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/book' element={<Book/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
