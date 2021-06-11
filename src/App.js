import React from 'react';
import './App.css';
import Banner from './components/Banner';
import Nav from './components/Nav';
import Services from './components/Services';
import About from './components/About';
import ContactMe from './components/Contact';

function App() {
  return (
    <div>
      <Banner/>
      <Nav/>
      <Services/>
      <About/>
      <ContactMe/>
    </div>
  );
}

export default App;
