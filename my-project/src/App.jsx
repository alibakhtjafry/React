import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from "../components/Navbar";
import AccountPage from '../components/AccountPage';
import ProductsPage from '../components/ProductsPage';
import CartPage from '../components/CartPage';
import HomePage from '../components/HomePage';
import "./App.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, []);

  return (
    <Router>
        <Navbar />
        <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route 
            path="/account" 
            element={isAuthenticated ? <AccountPage /> : <Navigate to="/" />} 
          />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
        </div>
    </Router>
  );
}

export default App;
