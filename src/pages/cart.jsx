import { useEffect, useState } from 'react';
import ProductInCart from '../ui/cart/product_in_cart';
import Footer from '../ui/footer';
import Navbar from '../ui/navbar';
import { Link } from 'react-router-dom';

const initialProducts = [
  {
    id: 1,
    image: 'luffy-hat.avif',
    name: 'luffy hat',
    price: 5.55,
    quantity: 2
  },
  {
    id: 2,
    image: 'luffy-hat.avif',
    name: 'luffy hat',
    price: 9.55,
    quantity: 2
  },
  {
    id: 3,
    image: 'luffy-hat.avif',
    name: 'luffy hat',
    price: 10,
    quantity: 2
  }
];
function Cart() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('cart') || '[]');
    setProducts(storedProducts);
  }, [products]);
  const total = products.reduce(
    (accumulator, currentProduct) => accumulator + currentProduct.price * currentProduct.quantity,
    0
  );

  function handleIncrement(id) {
    setProducts((previousProducts) =>
      previousProducts.map((product) => {
        if (product.id === id) {
          return { ...product, quantity: product.quantity + 1 };
        }
        return product;
      })
    );
  }

  function handleDeccrement(id) {
    setProducts((previousProducts) =>
      previousProducts.map((product) => {
        if (product.id === id) {
          return { ...product, quantity: product.quantity - 1 };
        }
        return product;
      })
    );
  }

  return (
    <>
      <Navbar />
      <div className=" flex flex-col gap-7 p-10 items-center">
        <h1 className="font-semibold text-2xl">Your cart items</h1>
        <Link to={'/'} className="text-[#BD918D] underline">
          Back to shopping
        </Link>
      </div>
      <div className="flex justify-between px-48 border-b-2 border-[#E5E5E5]">
        <h1 className="w-1/2">Product</h1>
        <h1>Price</h1>
        <h1>Quantity</h1>
        <h1>Total</h1>
      </div>
      <div className="border border-2">
        {products.map((initialProduct) => (
          <ProductInCart
            id={initialProduct.id}
            image={initialProduct.imageUrl}
            name={initialProduct.name}
            price={initialProduct.price}
            initialQuantity={initialProduct.quantity}
            onDeccrement={handleDeccrement}
            onIncrement={handleIncrement}
          />
        ))}
      </div>

      <div className="flex items-center border justify-end pr-40 gap-10">
        <h1>Total</h1>
        <h1>{total.toFixed(3)} dt</h1>
        <Link
          to={`${total === 0 ? '#' : '/checkout'}`}
          className={`bg-[#BD918D] font-semibold rounded-lg p-2 px-14 my-4 ml-20 text-base text-[#ffffff] ${total === 0 ? 'bg-gray-400 cursor-not-allowed' : ''}`}>
          Check-out
        </Link>
      </div>
      <Footer />
    </>
  );
}
export default Cart;
