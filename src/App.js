import React from 'react';
import './App.css';
import NavbarAlt from './components/NavbarAlt';
import TopJumbotron from './components/TopJumbotron';
import ProductLayout from './components/ProductLayout';
import ProductCard from './components/ProductCard';

function App() {
  return (
    <div className="App">
      <NavbarAlt />
      <TopJumbotron />
      <ProductLayout/>
    </div>
  );
}

export default App;
