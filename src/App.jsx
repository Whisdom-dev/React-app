import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Products from './Products';
import Footer from './Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Adnmin from './Admin';


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Products />
      <Footer />
    </div>
  );
}

export default App;

