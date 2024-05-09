import { useState } from 'react';
import QuantitySelector from '../quanity_selector';

function ProductInCart({ id, image, name, price, initialQuantity, onIncrement, onDeccrement }) {
  const [quantity, setQuantity] = useState(initialQuantity);
  const removeProductFromCart = (productId) => {
    // Retrieve existing cart items from localStorage
    const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');

    // Filter out the product you want to remove
    const updatedCart = existingCart.filter((item) => item.id !== productId);

    // Store the updated cart back in localStorage
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
    onIncrement(id);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      onDeccrement(id);
    }
  };
  return (
    <div className="flex justify-between px-48 flex p-10 items-center">
      <div className=" w-1/2 flex gap-4">
        <img className="w-40" src={image} alt="product image" />
        <div className="flex flex-col items-start gap-4">
          <h1 className="font-semibold text-2xl">{name}</h1>
          <button onClick={() => removeProductFromCart(id)} className="text-[#BD918D] underline">
            Remove
          </button>
        </div>
      </div>
      <h1>{price.toFixed(3)}</h1>
      <div className="flex border border-[#BD918D] px-2 items-center gap-2">
        <button className="text-lg hover:text-[#BD918D]" onClick={incrementQuantity}>
          +
        </button>
        <h3 className="text-lg">{quantity}</h3>
        <button className="text-xl hover:text-[#BD918D]" onClick={decrementQuantity}>
          -
        </button>
      </div>
      <h1>{(price * quantity).toFixed(3)} </h1>
    </div>
  );
}
export default ProductInCart;
