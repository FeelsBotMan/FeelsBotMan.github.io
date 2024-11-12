import React from 'react';
//import { useNavigate } from 'react-router-dom';

interface CheckoutProps {
  cartItems?: any[];
  totalAmount?: number;
}

const Checkout: React.FC<CheckoutProps> = ({ cartItems = [], totalAmount = 0 }) => {
  //const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 결제 로직 구현
    console.log('결제 처리중...');
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">주문/결제</h1>
      
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">주문 상품</h2>
        {cartItems.map((item, index) => (
          <div key={index} className="flex justify-between mb-2">
            <span>{item?.name}</span>
            <span>{item?.price?.toLocaleString()}원</span>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">배송 정보</h2>
          <div className="space-y-4">
            <div>
              <label className="block mb-1">받는 사람</label>
              <input
                type="text"
                className="w-full border rounded p-2"
                required
              />
            </div>
            <div>
              <label className="block mb-1">연락처</label>
              <input
                type="tel"
                className="w-full border rounded p-2"
                required
              />
            </div>
            <div>
              <label className="block mb-1">배송지</label>
              <input
                type="text"
                className="w-full border rounded p-2"
                required
              />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">결제 정보</h2>
          <div className="flex justify-between mb-4">
            <span>총 상품금액</span>
            <span>{totalAmount?.toLocaleString()}원</span>
          </div>
          <div className="flex justify-between mb-4">
            <span>배송비</span>
            <span>3,000원</span>
          </div>
          <div className="flex justify-between font-bold">
            <span>최종 결제금액</span>
            <span>{(totalAmount + 3000)?.toLocaleString()}원</span>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
        >
          결제하기
        </button>
      </form>
    </div>
  );
};

export default Checkout;
