import React from "react";
import "./App.css";
import Title from "./title/Title.js";
import Projects from "./projects/Projects";
import Navigation from "./navigation/Navigation";
import About from "./about/About";

const App = () => {
  return (
    <div id="App" className="app-container">
      <Title />
      <Navigation />
      <About />
      <Projects />
    </div>
  );
};

export default App;
