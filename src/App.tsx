import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Form from './components/Form';
import Statistics from './components/Statistics';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />

      <div>
        <Hero />
        <Form />
        <Statistics />
      </div>

      <Footer />
    </div>
  );
}

export default App;
