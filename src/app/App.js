import React from 'react';
import './App.css';
import Home from './../home/Home.js';
import About from './../about/About.js';
import Navigate from './../navbar/Navbar.js';
import Projects from '../projects/Projects';
import Featured from '../featured/Featured';

const App = () => {
  return (
    <div className="App">
      <Navigate />
      <Home />
      <About />
      <Featured />
      <Projects />
    </div>
  );
}

export default App;
