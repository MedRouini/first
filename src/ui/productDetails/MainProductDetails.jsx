import { ShoppingCartIcon } from '@heroicons/react/16/solid';
import QuantitySelector from '../quanity_selector';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function MainProductDetails() {
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
    <div className="lg:flex lg:py-20 lg:gap-16 lg:px-48">
      <div className="flex flex-col lg:w-1/2 items-center">
        <img src="luffy-hat.avif" alt="product image" className="w-full" />
        <h2 className="text-center p-1 font-semibold px-2">
          All hand-made with love and passion, minyarns items are made for use to use them and enjoy
          their cuteness.
        </h2>
        <div className="flex gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-[#66A88E]">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
            />
          </svg>
          <h3 className="text-[#66A88E]">Free shipping for big orders.</h3>
        </div>
      </div>
      <div className="flex flex-col lg:items-start justify-start gap-5 py-4">
        <h1 className="text-2xl lg:text-3xl font-medium lg:font-semibold">Product Name</h1>
        <p className=" lg:w-96">
          product description product description product description product description product
          description product description product description
        </p>
        <h3 className="text-2xl font-normal text-[#BD918D]">5.55 DT</h3>
        <div className="flex flex-col items-end lg:items-center gap-1">
          <h1>Quantity</h1>
          <div className="flex border border-[#BD918D] px-2 items-center gap-2">
            <button className="text-lg hover:text-[#BD918D]" onClick={incrementQuantity}>
              +
            </button>
            <h3 className="text-lg">{quantity}</h3>
            <button className="text-xl hover:text-[#BD918D]" onClick={decrementQuantity}>
              -
            </button>
          </div>
        </div>
        <div className="flex lg:gap-3 bg-[#BD918D] lg:font-semibold rounded-lg p-2 px-20 my-4 ml-20 text-base text-[#ffffff] hover:bg-[#ffffff] hover:text-[#BD918D] hover:border border-[#BD918D]">
          <ShoppingCartIcon className="w-6 h-6" />
          Add to cart
        </div>
      </div>
    </div>
  );
}

export default MainProductDetails;
