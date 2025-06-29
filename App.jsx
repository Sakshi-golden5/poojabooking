import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom'; 
import Home from './Pages/Home';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import About from './Pages/About';

const App = () => {
  const location = useLocation(); 

  const isOwnerPath = location.pathname.includes("owner"); 

  return (
    <div>
      {!isOwnerPath && <Navbar />}
      <div className='min-h-[70vh]'>
        <Routes>
          <Route path="/" element={<Home />} />
           <Route path="/services" element={<Services />} />
           <Route path="/contact" element={<Contact />} />
           <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
