import React, { useState } from 'react';

function AddProductForm() {
  const [product, setProduct] = useState({
    name: '',
    brand: '',
    price: '',
    governorate: '', // Changed from 'category' to 'governorate'
    itemWeight: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with:', product);
    setProduct({
      name: '',
      brand: '',
      price: '',
      governorate: '',
      itemWeight: '',
      description: ''
    });
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
              <label htmlFor="fullName" className="block mb-2 text-sm font-medium text-gray-900">Full Name</label>
              <input type="text" name="fullName" id="fullName" value={product.fullName} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Type Full Name" required />
            </div>
            <div className="w-full">
            <label htmlFor="governorate" className="block mb-2 text-sm font-medium text-gray-900">Governorate</label>
              <select id="governorate" name="governorate" value={product.governorate} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5">
                <option value="">Select governorate</option>
                {tunisianGovernorates.map((governorate) => (
                  <option key={governorate} value={governorate}>{governorate}</option>
                ))}
              </select>
            </div>
            <div className="w-full">
              <label htmlFor="delegation" className="block mb-2 text-sm font-medium text-gray-900">Delegation</label>
              <input type="text" name="delegation" id="delegation" value={product.delegation} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Delegation" required />
            </div>
            <div className="w-full">
              <label htmlFor="adressDescription" className="block mb-2 text-sm font-medium text-gray-900">Address Description</label>
              <input type="text" name="addressDescription" id="addressDescription" value={product.addressDescription} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Provide Address Description" required />
            </div>
            <div className="w-full">
              <label htmlFor="zipCode" className="block mb-2 text-sm font-medium text-gray-900">Zip Code</label>
              <input type="number" name="zipCode" id="zipCode" value={product.zipCode} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Product Provide Zip Code" required />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900">Additional Note</label>
              <textarea id="note" name="note" value={product.description} onChange={handleChange} rows="8" className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2.5" placeholder="Put any additional note here"></textarea>
            </div>
          </div>
          <button type="submit" className="bg-[#BD918D] lg:font-semibold rounded-lg p-2  my-4 text-base text-[#ffffff] hover:bg-[#ffffff] hover:text-[#BD918D] hover:border border-[#BD918D]">
            Procceed Checkout
          </button>
        </form>
      </div>
    </section>
  );
}

export default AddProductForm;
