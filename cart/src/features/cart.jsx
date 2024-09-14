import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateCart } from '../store/actions';

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleQuantityChange = (id, quantity) => {
    if (quantity <= 0) {
      dispatch(removeFromCart(id));
    } else {
      dispatch(updateCart(id, quantity));
    }
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cart.map(item => (
              <li key={item.id} className="border p-4 rounded-lg shadow flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  {/* Show the total price based on the item's quantity */}
                  <p className="text-gray-600">Price: ${item.price}</p>
                  <p className="text-gray-800 font-semibold">Total: ${(item.price * item.quantity).toFixed(2)}</p>
                </div>
                <div className="flex items-center">
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                    className="w-16 border rounded p-1 mr-4"
                    min="1"
                  />
                  <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          {/* Show total cart price */}
          <div className="mt-4">
            <h3 className="text-xl font-bold">Total Price: ${calculateTotalPrice()}</h3>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
