import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Explore from './pages/Explore';
import Contact from './pages/Contact';

import Properties from './pages/Properties';
import Villa from './pages/Villa';
import Apartment from './pages/Apartment';
import FoodDrinks from './pages/FoodDrinks';

import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/properties" element={<Properties />} />
        <Route path="/properties/villa" element={<Villa />} />
        <Route path="/properties/apartment" element={<Apartment />} />
        <Route path="/fooddrinks" element={<FoodDrinks />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
