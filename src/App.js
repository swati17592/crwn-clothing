import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
      </BrowserRouter>
    </div>
  );
}

export default App;
