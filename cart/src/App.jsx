import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './features/Navbar';
import ProductList from './features/catalog';
import Cart from './features/cart';
function App() {
  return (
    <Router>
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
