import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Facts from "./components/Facts";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Services from "./components/Services";
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
        <Portfolio />
        <Services />
        <Contact />
      </main>
    </div>
  );
}

export default App;
