import React, {useState, useEffect, useContext} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TopJumbotron from './components/TopJumbotron';
import ProductLayout from './components/ProductLayout';
import AppContext from './AppContext'

function App() {

  const [globalState, setGlobalState] = useState(
    {
      cart: {}
    }
  );


  return (
    
    <div className="App">
    <AppContext.Provider value={[globalState, setGlobalState]}>
      <Navbar />
      <TopJumbotron />
      {/* <p>globalState.cart</p> */}
      <ProductLayout/>
      </AppContext.Provider>
    </div>
  );
}

export default App;

