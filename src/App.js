import React, {useState, useEffect} from 'react';

import './App.css';
import Navbar from './components/Navbar';
import TopJumbotron from './components/TopJumbotron';
import ProductLayout from './components/ProductLayout';


function App() {


  return (
    <div className="App">
      <Navbar />
      <TopJumbotron />
      <ProductLayout/>
    </div>
  );
}

export default App;
