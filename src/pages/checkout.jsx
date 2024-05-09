import { useEffect, useState } from 'react';
import Footer from '../ui/footer';
import Navbar from '../ui/navbar';
import AddProductForm from '../ui/order/orderForm';
import { redirect, useNavigate } from 'react-router-dom';

function Checkout() {
  const [products, setProducts] = useState([]);
  const history = useNavigate();

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('cart'));
    if (storedProducts) {
      const productDetails = storedProducts.map((product) => ({
        id: product.id,
        price: product.price
      }));
      setProducts(productDetails);
      return;
    }
    history('/');
  }, []);

  return (
    <div>
      <Navbar />
      <AddProductForm products={products} />
      <Footer />
    </div>
  );
}
export default Checkout;
