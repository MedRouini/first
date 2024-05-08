import { useState } from 'react';
function QuantitySelector ({onIncrement, OnDecrement}) {
    const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

    return (
        <div className="flex border border-[#BD918D] px-2 items-center gap-2">
            <button className="text-lg hover:text-[#BD918D]" onClick={incrementQuantity}>
              +
            </button>
            <h3 className="text-lg">{quantity}</h3>
            <button className="text-xl hover:text-[#BD918D]" onClick={decrementQuantity}>
              -
            </button>
          </div>
    );
} export default QuantitySelector; 