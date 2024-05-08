import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/home';
import ProductDetails from './pages/productDetails';
import Cart from './pages/cart';
import OrderConfirmed from './pages/order_confirmed';
import Checkout from './pages/checkout';

function App() {
  return (
    <Checkout/>
  );
}

export default App;
