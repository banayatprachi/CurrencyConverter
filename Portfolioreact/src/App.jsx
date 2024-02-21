import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Project';
import Skills from './Components/Skills';
import Certificates from './Components/Certificates';
import Contact from './Components/Contact';
import Experience from './Components/Experience';
import Education from './Components/Education';


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      {/* <Experience/> */}
      {/*<Education/> */}
      <Projects />
      <Certificates />
      <Contact />
     
    </div>
  );
}

export default App;
