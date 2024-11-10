import { useState } from 'react';
import { CartItem } from '../types';

const Cart = () => {
  const [cartItems] = useState<CartItem[]>([]);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">장바구니</h1>
      {cartItems.length === 0 ? (
        <div className="text-center py-8">
          <p>장바구니가 비어있습니다.</p>
        </div>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center gap-4 bg-white p-4 rounded-lg shadow mb-4">
              <img src={item.imageUrl} alt={item.name} className="w-24 h-24 object-cover rounded" />
              <div className="flex-1">
                <h3 className="font-semibold">{item.name}</h3>
                <p>{item.price.toLocaleString()}원</p>
                <div className="flex items-center gap-2 mt-2">
                  <button className="px-2 py-1 border rounded">-</button>
                  <span>{item.quantity}</span>
                  <button className="px-2 py-1 border rounded">+</button>
                </div>
              </div>
            </div>
          ))}
          <div className="bg-white p-4 rounded-lg shadow mt-4">
            <div className="flex justify-between items-center">
              <span className="font-semibold">총 금액:</span>
              <span className="font-bold text-xl">{calculateTotal().toLocaleString()}원</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;