import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <div>
    <Navbar />
    <Home />
    <Main />
    <Footer />
    </div>
  )
}

export default App
