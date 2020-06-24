import React from 'react';
import './App.css';
import Home from './../home/Home.js';
import About from './../about/About.js';
import Navigate from './../navbar/Navbar.js';
import Featured from '../featured/Featured';
import Sort from '../sort/Sort';

const App = () => {
  return (
    <div id="App" className="App">
      <Navigate />
      <Home />
      <About />
      <Featured />
      <Sort />
    </div>
  );
}

export default App;
