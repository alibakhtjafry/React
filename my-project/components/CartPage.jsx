import { useState } from 'react';

const CartPage = () => {
  const [quantities, setQuantities] = useState({ item1: 2, item2: 2 });

  const updateQuantity = (itemId, change) => {
    setQuantities(prev => ({
      ...prev,
      [itemId]: Math.max(1, prev[itemId] + change)
    }));
  };

  return (
    <div className="h-screen bg-gray-100">
      <h1 className="mb-10 text-center text-2xl font-bold pt-8">Cart Items</h1>
      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div className="rounded-lg md:w-2/3">
          <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
            <img 
              src="/api/placeholder/400/320" 
              alt="product-image" 
              className="w-full rounded-lg sm:w-40" 
            />
            <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
              <div className="mt-5 sm:mt-0">
                <h2 className="text-lg font-bold text-gray-900">Fresh Salad Bowl</h2>
                <p className="mt-1 text-xs text-gray-700">Regular Size</p>
              </div>
              <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                <div className="flex items-center border-gray-100">
                  <button 
                    className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-emerald-500 hover:text-white" 
                    onClick={() => updateQuantity('item1', -1)}
                  > - </button>
                  <input className="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" value={quantities.item1} readOnly />
                  <button 
                    className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-emerald-500 hover:text-white"
                    onClick={() => updateQuantity('item1', 1)}
                  > + </button>
                </div>
                <div className="flex items-center space-x-4">
                  <p className="text-sm">$12.99</p>
                  <button className="text-gray-500 hover:text-red-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Sub total */}
        <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
          <div className="mb-2 flex justify-between">
            <p className="text-gray-700">Subtotal</p>
            <p className="text-gray-700">$25.98</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-700">Shipping</p>
            <p className="text-gray-700">$4.99</p>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between">
            <p className="text-lg font-bold">Total</p>
            <div>
              <p className="mb-1 text-lg font-bold">$30.97 USD</p>
              <p className="text-sm text-gray-700">including VAT</p>
            </div>
          </div>
          <button className="mt-6 w-full rounded-md bg-emerald-500 py-1.5 font-medium text-white hover:bg-emerald-600">Check out</button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;




