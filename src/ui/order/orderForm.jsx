import React, { useEffect, useState } from 'react';
import { redirect, useNavigate } from 'react-router-dom';

function AddProductForm({ products }) {
  const history = useNavigate();

  const [order, setOrder] = useState({
    fullName: '',
    delegation: '',
    governorate: '', // Changed from 'category' to 'governorate'
    addressDescription: '',
    zipCode: '',
    note: '',
    phoneNumber: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrder({ ...order, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (1 === 1) {
      const productIds = products.map((product) => product.id);
      const totalPrice = products.reduce((total, product) => total + product.price, 0);

      const createdOrder = {
        fullName: order.fullName,
        delegation: order.delegation,
        governorate: order.governorate,
        addressDescription: order.addressDescription,
        zipCode: Number(order.zipCode),
        note: order.note,
        totalPrice,
        productIds,
        phoneNumber: order.phoneNumber
      };

      const response = await fetch('http://localhost:5000/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(createdOrder)
      });

      if (response.ok) {
        setOrder({
          fullName: '',
          governorate: '',
          delegation: '',
          addressDescription: '',
          zipCode: '',
          note: '',
          phoneNumber: ''
        });
        localStorage.removeItem('cart'); // Remove 'cart' from localStorage
        history('/checkout/order_confirmed');
      } else {
        const parsedResponse = await response.json();
        const errorMessage = parsedResponse.message.join(', ');
        setError(errorMessage);
      }
      setIsLoading(false);
    }
  };

  // List of Tunisia's governorates
  const tunisianGovernorates = [
    'Ariana',
    'Beja',
    'Ben Arous',
    'Bizerte',
    'Gabes',
    'Gafsa',
    'Jendouba',
    'Kairouan',
    'Kasserine',
    'Kebili',
    'Kef',
    'Mahdia',
    'Manouba',
    'Medenine',
    'Monastir',
    'Nabeul',
    'Sfax',
    'Sidi Bouzid',
    'Siliana',
    'Sousse',
    'Tataouine',
    'Tozeur',
    'Tunis',
    'Zaghouan'
  ];

  return (
    <section className="bg-white">
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <h2 className="mb-4 text-3xl font-bold text-[#BD918D]">Checkout details </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
              <label htmlFor="fullName" className="block mb-2 text-sm font-medium text-gray-900">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                value={order.fullName}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="Type Full Name"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="fullName" className="block mb-2 text-sm font-medium text-gray-900">
                Full Name
              </label>
              <input
                type="number"
                name="phoneNumber"
                id="phoneNumber"
                value={order.phoneNumber}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="Type Full Name"
                required
              />
            </div>
            <div className="w-full">
              <label htmlFor="governorate" className="block mb-2 text-sm font-medium text-gray-900">
                Governorate
              </label>
              <select
                id="governorate"
                name="governorate"
                value={order.governorate}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5">
                <option value="">Select governorate</option>
                {tunisianGovernorates.map((governorate) => (
                  <option key={governorate} value={governorate}>
                    {governorate}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-full">
              <label htmlFor="delegation" className="block mb-2 text-sm font-medium text-gray-900">
                Delegation
              </label>
              <input
                type="text"
                name="delegation"
                id="delegation"
                value={order.delegation}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="Delegation"
                required
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="adressDescription"
                className="block mb-2 text-sm font-medium text-gray-900">
                Address Description
              </label>
              <input
                type="text"
                name="addressDescription"
                id="addressDescription"
                value={order.addressDescription}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="Provide Address Description"
                required
              />
            </div>
            <div className="w-full">
              <label htmlFor="zipCode" className="block mb-2 text-sm font-medium text-gray-900">
                Zip Code
              </label>
              <input
                type="number"
                min={1000}
                max={9999}
                name="zipCode"
                id="zipCode"
                value={order.zipCode}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="Provide Zip Code"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900">
                Additional Note
              </label>
              <textarea
                id="note"
                name="note"
                value={order.note}
                onChange={handleChange}
                rows="8"
                className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2.5"
                placeholder="Put any additional note here"></textarea>
            </div>
          </div>
          <button
            disabled={isLoading}
            type="submit"
            className="bg-[#BD918D] lg:font-semibold rounded-lg p-2  my-4 text-base text-[#ffffff] hover:bg-[#ffffff] hover:text-[#BD918D] hover:border border-[#BD918D] disabled:bg-gray-400">
            Procceed Checkout
          </button>
          {error && <p className="text-red-500 font-medium "> {error}</p>}
        </form>
      </div>
    </section>
  );
}

export default AddProductForm;
