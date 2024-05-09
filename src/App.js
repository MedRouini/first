import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ReactDOM from 'react-dom/client';

import Home from './pages/home';
import ProductDetails from './pages/productDetails';
import Cart from './pages/cart';
import OrderConfirmed from './pages/order_confirmed';
import Checkout from './pages/checkout';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product/:id" element={<ProductDetails />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/checkout/order_confirmed" element={<OrderConfirmed />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
