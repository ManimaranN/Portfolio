import React from "react";
import logo from "./logo.svg";
import "./App.css";

//components
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Skills from "./Components/Skils/Skills";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Skills />
    </div>
  );
}

export default App;
