import { Link } from 'react-router-dom';
import Navbar from '../ui/navbar';
function OrderConfirmed() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center p-4 gap-6 md:p-10 md:gap-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-56 h-56 text-[#BD918D]">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
        <h1 className="text-2xl font-medium md:text-3xl md:font-semibold">Order Confiremed</h1>
        <p className="md:w-1/2 text-center">
          Thank you so much for your purchase! Your support means the world to us. We hope you enjoy
          your new product and that it brings you lots of joy. If you have any questions or need
          assistance, feel free to reach out. Thanks again for choosing us!
        </p>
        <Link
          to={'/'}
          className="bg-[#BD918D] font-semibold rounded-lg p-2 px-14 text-base text-[#ffffff] ">
          Back to shopping
        </Link>
      </div>
    </>
  );
}
export default OrderConfirmed;
