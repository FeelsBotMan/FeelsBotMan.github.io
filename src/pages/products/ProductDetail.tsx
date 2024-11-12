import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  
  // 실제 구현시에는 API로 상품 정보를 가져와야 함
  const [product] = useState<Product>({
    id: '1',
    name: '상품명',
    price: 29000,
    description: '상품 상세 설명입니다.',
    imageUrl: '/images/product-1.jpg'
  });

  const handleQuantityChange = (value: number) => {
    if (quantity + value > 0) {
      setQuantity(quantity + value);
    }
  };

  const handleAddToCart = () => {
    // 장바구니 추가 로직 구현
    console.log('장바구니에 추가:', {
      productId: id,
      quantity: quantity
    });
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="product-image">
          <img 
            src={product.imageUrl} 
            alt={product.name}
            className="w-full rounded-lg"
          />
        </div>

        <div className="product-info">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl font-semibold mb-6">
            {product.price.toLocaleString()}원
          </p>
          
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">상품 설명</h2>
            <p className="text-gray-600">{product.description}</p>
          </div>

          <div className="quantity-selector mb-6">
            <h2 className="text-xl font-semibold mb-2">수량</h2>
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => handleQuantityChange(-1)}
                className="px-3 py-1 border rounded"
              >
                -
              </button>
              <span>{quantity}</span>
              <button 
                onClick={() => handleQuantityChange(1)}
                className="px-3 py-1 border rounded"
              >
                +
              </button>
            </div>
          </div>

          <div className="total-price mb-6">
            <h2 className="text-xl font-semibold mb-2">총 상품금액</h2>
            <p className="text-2xl font-bold">
              {(product.price * quantity).toLocaleString()}원
            </p>
          </div>

          <button
            onClick={handleAddToCart}
            className="w-full bg-blue-600 text-white py-4 rounded-lg flex items-center justify-center space-x-2 hover:bg-blue-700"
          >
            <ShoppingCart size={20} />
            <span>장바구니 담기</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
