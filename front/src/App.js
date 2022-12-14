// import logo from './logo.svg';
import './App.css';
import { Footer } from './components/layout/Footer';
import Header from './components/layout/Header';
import React from 'react';
import Home from './components/Home';
import { ProductDetails } from './components/products/productDetails';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container container-fluid">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/producto/:id" element={<ProductDetails />} />
          </Routes>
        </div>
        <Home />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
