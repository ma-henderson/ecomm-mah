import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import AppContext from './AppContext'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import FeedForm from './components/FeedForm';


function App() {

  const [globalState, setGlobalState] = useState(
    {
      cart: [], // only needs to be an object if order matters
    loggedIn: false
    }
  );


  return (
    <AppContext.Provider value={[globalState, setGlobalState]}>
      
      <BrowserRouter>
        <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/About' component={About} />
          </Switch>  
          
      </BrowserRouter>

    </AppContext.Provider>
  );
}

export default App;