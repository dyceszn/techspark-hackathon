import { FC } from 'react';
const Cart: FC = () => {
  const cartItems = [
    {
      id: 1,
      name: 'Black Tote Bag',
      price: 49.99,
      quantity: 1,
      image: 'bag.png'
    },
    {
      id: 2,
      name: 'Designer Tote',
      price: 59.99,
      quantity: 1,
      image: '/bag.png'
    },
    {
      id: 3,
      name: 'Canvas Bag',
      price: 39.99,
      quantity: 1,
      image: '/bag.png'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">My Cart</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {cartItems.map((item) => (
              <div 
                key={item.id}
                className="flex items-center gap-6 p-4 bg-gray-50 rounded-lg mb-4"
              >
                <img 
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center space-x-3">
                      <button className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                        <i className="fas fa-minus text-sm"></i>
                      </button>
                      <span>{item.quantity}</span>
                      <button className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                        <i className="fas fa-plus text-sm"></i>
                      </button>
                    </div>
                    <span className="text-lg font-semibold">${item.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-6">Order Summary</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold">$149.97</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="font-semibold">$9.99</span>
                </div>
                <div className="border-t pt-4 mt-4">
                  <div className="flex justify-between">
                    <span className="text-lg font-semibold">Total</span>
                    <span className="text-lg font-bold">$159.96</span>
                  </div>
                </div>
              </div>
              <button className="w-full mt-6 bg-black text-white py-3 rounded-full">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
