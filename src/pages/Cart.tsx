import { useState } from 'react';
import { CartItem } from '../types';
import { Minus, Plus, Trash2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Cart = () => {
  const [cartItems] = useState<CartItem[]>([]);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const calculateSubtotal = (price: number, quantity: number) => {
    return (price * quantity).toLocaleString() + '원';
  };

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h1>장바구니</h1>
        <p className="cart-count">
          {cartItems.length > 0 ? `${cartItems.length}개의 상품` : ''}
        </p>
      </div>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <div className="empty-cart-content">
            <h2>장바구니가 비어있습니다</h2>
            <p>원하는 상품을 장바구니에 담아보세요</p>
            <Link to="/products" className="shop-link">
              쇼핑 계속하기
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      ) : (
        <div className="cart-content">
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="item-image">
                  <img src={item.imageUrl} alt={item.name} />
                </div>
                <div className="item-details">
                  <div className="item-info">
                    <h3>{item.name}</h3>
                    <p className="item-price">{item.price.toLocaleString()}원</p>
                  </div>
                  <div className="item-actions">
                    <div className="quantity-controls">
                      <button className="quantity-btn">
                        <Minus size={16} />
                      </button>
                      <span className="quantity">{item.quantity}</span>
                      <button className="quantity-btn">
                        <Plus size={16} />
                      </button>
                    </div>
                    <p className="subtotal">
                      {calculateSubtotal(item.price, item.quantity)}
                    </p>
                    <button className="remove-btn">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <div className="summary-row">
              <span>상품 금액</span>
              <span>{calculateTotal().toLocaleString()}원</span>
            </div>
            <div className="summary-row">
              <span>배송비</span>
              <span>무료</span>
            </div>
            <div className="summary-total">
              <span>총 결제금액</span>
              <span>{calculateTotal().toLocaleString()}원</span>
            </div>
            <button className="checkout-btn">
              결제하기
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;