import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './pages/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Roadmap from './pages/Roadmap';
import GetWhitelisted from './pages/GetWhitelisted';
import Contact from './pages/Contact';

const App: React.FC = () => {
  return (

    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/get-whitelisted" element={<GetWhitelisted />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>

  );
};

export default App;

