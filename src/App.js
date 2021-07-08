import React from 'react';
import './App.css';
import Banner from './components/Banner';
import Nav from './components/Nav';
import Services from './components/Services';
import About from './components/About';
import ContactMe from './components/Contact';
import Blogs from './components/Blogs'

function App() {
  return (
    <div>
      <Banner/>
      <Nav/>
      <Services/>
      <About/>
      <ContactMe/>
      <Blogs/>
    </div>
  );
}

export default App;
