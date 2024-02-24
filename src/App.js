import React from 'react';
import Banner from './components/Banner';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Banner />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;