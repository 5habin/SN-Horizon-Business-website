import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/nav.jsx';
import Hero from './components/hero/hero.jsx';
import About from './components/about/about.jsx';
import Service from './components/service/service.jsx';
import Contact from './components/contact/contact.jsx';
import ContactUs from './components/contact/contactUs.jsx'
import Story from './components/story/story.jsx'; 
import Solution from './components/Solutions/Services.jsx';
import Sectors from './components/sector/Sectors.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/story" element={<Story />} />
        <Route path="/Solution" element={<Solution />} />
        <Route path="/Sectors" element={<Sectors />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/" element={
            <>
              <Nav />
              <Hero />
              <About />
              <Service />
              <Contact />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
