import React from "react";
import About from "./components/About";
import Facts from "./components/Facts";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Resume from "./components/Resume";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <main id="main">
        <About />
        <Facts />
        <Skills />
        <Resume />
      </main>
    </div>
  );
}

export default App;
