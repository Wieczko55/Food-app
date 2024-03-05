import './index.css';
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HeadLineCards from './components/HeadLineCards';
import Food from './components/Food';
import Category from './components/Category';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <HeadLineCards />
      <Food />
      <Category />
    </div>
  );
}

export default App;
